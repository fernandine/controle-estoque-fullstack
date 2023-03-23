import { Movimentacao } from './../../common/movimentacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { TipoMovimento } from '../../common/tipoMovimento';
import { Produto } from '../../common/produto';
import { ProdutoService } from '../../service/produto.service';


@Component({
  selector: 'app-form-movimentacao',
  templateUrl: './form-movimentacao.component.html'
})
export class FormMovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];
  formMovimentacao!: FormGroup;
  displayDialog: boolean = false;
  listaProduto: Produto[] = [];
  selectedProduto: any;

  tipoMovimento = [
    {label: 'Selecione', value: null},
    { label: TipoMovimento.ENTRADA, value: TipoMovimento.ENTRADA },
    { label: TipoMovimento.SAIDA, value: TipoMovimento.SAIDA },
    { label: TipoMovimento.SALDO_INICIAL, value: TipoMovimento.SALDO_INICIAL },
    { label: TipoMovimento.AJUSTE_ENTRADA, value: TipoMovimento.AJUSTE_ENTRADA },
    { label: TipoMovimento.AJUSTE_SAIDA, value: TipoMovimento.AJUSTE_SAIDA }
  ];

  constructor(
    private fb: FormBuilder,
    private service: MovimentacaoService,
    private produtoService: ProdutoService
    ) { }

  ngOnInit(): void {
    this.formMovimentacao = this.fb.group({
      produtoId: [0],
      tipoMovimento: ['', Validators.required],
      quantidade: [0, Validators.required],
      data: ['', Validators.required],
      motivo: ['', Validators.required],
      documento: [''],
      saldo: [0, Validators.required],
      situacao: ['', Validators.required]
    });
this.getMovimentacoes();
this.getProdutos();


}

getProdutos(): void {
  this.produtoService.getProdutos().subscribe((produtos) => {
    this.listaProduto = produtos;
  });
}

  getMovimentacoes(): void {
    this.service.getMovimentacoes().subscribe(
      (movimentacoes) => {
          this.movimentacoes = movimentacoes;
       });
  }


  save(): void {
    const movimentacao = this.formMovimentacao.value;

    // Verificar se o produto já possui um lançamento de saldo inicial
    const hasSaldoInicial = this.movimentacoes.some(mov =>
      mov.produtoId === movimentacao.produtoId && mov.tipoMovimento === TipoMovimento.SALDO_INICIAL
    );

    // Verificar se o produto já possui movimentações
    const hasMovimentacoes = this.movimentacoes.some(mov =>
      mov.produtoId === movimentacao.produtoId && mov.tipoMovimento !== TipoMovimento.SALDO_INICIAL
    );

    // Verificar se a quantidade movimentada é válida
    const saldoAtual = this.calcularSaldo(movimentacao.produtoId);
    if (movimentacao.tipoMovimento === TipoMovimento.SAIDA && movimentacao.quantidade > saldoAtual) {
      alert('A quantidade movimentada não pode ser maior que o saldo atual do produto.');
      return;
    }

    // Verificar se é permitido lançamento de saldo inicial
    if (movimentacao.tipoMovimento === TipoMovimento.SALDO_INICIAL) {
      if (hasSaldoInicial) {
        alert('Já existe um lançamento de saldo inicial para esse produto.');
        return;
      }
      if (hasMovimentacoes) {
        alert('Não é permitido lançamento de saldo inicial para um produto que já possui movimentações.');
        return;
      }
    }

    // Verificar se é permitido lançamento de ajuste
    if (movimentacao.tipoMovimento === TipoMovimento.AJUSTE_ENTRADA || movimentacao.tipoMovimento === TipoMovimento.AJUSTE_SAIDA) {
      if (!hasMovimentacoes) {
        alert('Não é permitido lançamento de ajuste para um produto que não possui movimentações.');
        return;
      }
    }

    this.service.createMovimentacao(movimentacao).subscribe(() => {
      this.formMovimentacao.reset();
      this.selectedProduto = null;
      this.displayDialog = false;
      this.getMovimentacoes();
      window.location.reload();
    });
  }


  cancel() {
    this.formMovimentacao.reset();
    this.selectedProduto = null;
    this.displayDialog = false;
  }

  showDocumento = false;
    onTipoMovimentoChange() {
    const tipoMovimento = this.formMovimentacao.controls['tipoMovimento'].value;
    this.showDocumento = tipoMovimento === 'ENTRADA' || tipoMovimento === 'SAIDA';
  }

  //função para verificar se já existe uma movimentação de saldo inicial para o produto:
  private hasSaldoInicial(produtoId: number): boolean {
    return this.movimentacoes.some(m => m.produtoId === produtoId && m.tipoMovimento === TipoMovimento.SALDO_INICIAL);
  }

  //função para verificar se existem outras movimentações para o produto
  private hasMovimentacoes(produtoId: number): boolean {
    return this.movimentacoes.some(m => m.produtoId === produtoId && m.tipoMovimento !== TipoMovimento.SALDO_INICIAL);
  }

  //validação para verificar se o saldo do produto não ficará negativo
  private hasSaldoNegativo(produtoId: number, quantidade: number): boolean {
    const movimentacoes = this.movimentacoes.filter(m => m.produtoId === produtoId);
    const saldo = movimentacoes.reduce((prev, curr) => {
      switch (curr.tipoMovimento) {
        case TipoMovimento.ENTRADA:
        case TipoMovimento.AJUSTE_ENTRADA:
          return prev + curr.quantidade;
        case TipoMovimento.SAIDA:
        case TipoMovimento.AJUSTE_SAIDA:
          return prev - curr.quantidade;
        case TipoMovimento.SALDO_INICIAL:
          return curr.quantidade;
        default:
          return prev;
      }
    }, 0);
    return saldo + quantidade < 0;
  }
/*
  //validação para permitir apenas movimentações com data posterior à criação do produto:
  private isDataValida(produtoId: number, data: Date): boolean {
    const produto = this.listaProduto.find(p => p.id === produtoId);
    return produto! && data >= produto.dataCriacao;
  }*/

  //função para calcular o saldo considerando as movimentações anteriores
  private calcularSaldo(produtoId: number): number {
    const movimentacoes = this.movimentacoes.filter(m => m.produtoId === produtoId);
    return movimentacoes.reduce((prev, curr) => {
      switch (curr.tipoMovimento) {
        case TipoMovimento.ENTRADA:
        case TipoMovimento.AJUSTE_ENTRADA:
          return prev + curr.quantidade;
        case TipoMovimento.SAIDA:
        case TipoMovimento.AJUSTE_SAIDA:
          return prev - curr.quantidade;
        case TipoMovimento.SALDO_INICIAL:
          return curr.quantidade;
        default:
          return prev;
      }
    }, 0);
  }

}
