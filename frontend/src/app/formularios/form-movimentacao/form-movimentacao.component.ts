import { Movimentacao } from './../../common/movimentacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  produto = new Produto;
  produto$: Produto[] = [];

  tipoMovimento = [
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
      produto: ['', Validators.required],
      tipoMovimento: ['', Validators.required],
      quantidade: [0, Validators.required],
      data: ['', Validators.required],
      motivo: ['', Validators.required],
      documento: ['', Validators.required],
      saldo: [0, Validators.required],
      situacao: ['', Validators.required]
    });
this.getMovimentacoes();
this.getProdutos();
  }

  insertMovimentacao() {
  const movimentacao = this.formMovimentacao.value;
  this.service.createMovimentacao(movimentacao).subscribe(() => {
    this.formMovimentacao.reset();
    this.displayDialog = false;
    // lógica para atualizar a lista de produtos na página
    this.getMovimentacoes();
  });
}

  getMovimentacoes(): void {
    this.service.getMovimentacoes().subscribe(
      (movimentacoes) => {
          this.movimentacoes = movimentacoes;
       });
  }

  getProdutos(): void {
    this.produtoService.getProduto().subscribe(
    (produtos) => {
    this.produto$ = produtos;
    });
    }


  cancel() {
    this.formMovimentacao.reset();
    this.displayDialog = false;
  }

}
