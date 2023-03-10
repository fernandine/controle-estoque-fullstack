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

  //Implementa????o da valida????o das regras de neg??cio no m??todo insertMovimentacao(),
  //antes de chamar o servi??o createMovimentacao():
  insertMovimentacao(): void {
    const movimentacao = this.formMovimentacao.value;

    // Verificar se o produto j?? possui um lan??amento de saldo inicial
    const hasSaldoInicial = this.movimentacoes.some(mov =>
      mov.produtoId === movimentacao.produtoId && mov.tipoMovimento === TipoMovimento.SALDO_INICIAL
    );

    // Verificar se o produto j?? possui movimenta????es
    const hasMovimentacoes = this.movimentacoes.some(mov =>
      mov.produtoId === movimentacao.produtoId && mov.tipoMovimento !== TipoMovimento.SALDO_INICIAL
    );

    // Verificar se a quantidade movimentada ?? v??lida
    const saldoAtual = this.calcularSaldo(movimentacao.produtoId);
    if (movimentacao.tipoMovimento === TipoMovimento.SAIDA && movimentacao.quantidade > saldoAtual) {
      alert('A quantidade movimentada n??o pode ser maior que o saldo atual do produto.');
      return;
    }

    // Verificar se ?? permitido lan??amento de saldo inicial
    if (movimentacao.tipoMovimento === TipoMovimento.SALDO_INICIAL) {
      if (hasSaldoInicial) {
        alert('J?? existe um lan??amento de saldo inicial para esse produto.');
        return;
      }
      if (hasMovimentacoes) {
        alert('N??o ?? permitido lan??amento de saldo inicial para um produto que j?? possui movimenta????es.');
        return;
      }
    }

    // Verificar se ?? permitido lan??amento de ajuste
    if (movimentacao.tipoMovimento === TipoMovimento.AJUSTE_ENTRADA || movimentacao.tipoMovimento === TipoMovimento.AJUSTE_SAIDA) {
      if (!hasMovimentacoes) {
        alert('N??o ?? permitido lan??amento de ajuste para um produto que n??o possui movimenta????es.');
        return;
      }
    }

    this.service.createMovimentacao(movimentacao).subscribe(() => {
      this.formMovimentacao.reset();
      this.selectedProduto = null;
      this.displayDialog = false;
      this.getMovimentacoes();
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

  //fun????o para verificar se j?? existe uma movimenta????o de saldo inicial para o produto:
  private hasSaldoInicial(produtoId: number): boolean {
    return this.movimentacoes.some(m => m.produtoId === produtoId && m.tipoMovimento === TipoMovimento.SALDO_INICIAL);
  }

  //fun????o para verificar se existem outras movimenta????es para o produto
  private hasMovimentacoes(produtoId: number): boolean {
    return this.movimentacoes.some(m => m.produtoId === produtoId && m.tipoMovimento !== TipoMovimento.SALDO_INICIAL);
  }

  //valida????o para verificar se o saldo do produto n??o ficar?? negativo
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
  //valida????o para permitir apenas movimenta????es com data posterior ?? cria????o do produto:
  private isDataValida(produtoId: number, data: Date): boolean {
    const produto = this.listaProduto.find(p => p.id === produtoId);
    return produto! && data >= produto.dataCriacao;
  }*/

  //fun????o para calcular o saldo considerando as movimenta????es anteriores
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
