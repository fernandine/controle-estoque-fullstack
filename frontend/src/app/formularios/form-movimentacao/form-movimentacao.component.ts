import { Movimentacao } from './../../common/movimentacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';

import { TipoMovimento } from '../../common/tipoMovimento';
import { NotificacaoService } from '../../service/notificacao.service';


@Component({
  selector: 'app-form-movimentacao',
  templateUrl: './form-movimentacao.component.html'
})
export class FormMovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];
  formMovimentacao!: FormGroup;
  displayDialog: boolean = false;

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
    ) { }

  ngOnInit(): void {
    this.formMovimentacao = this.fb.group({
      produtoId: [0, Validators.required],
      tipoMovimento: ['', Validators.required],
      quantidade: [0, Validators.required],
      data: ['', Validators.required],
      motivo: ['', Validators.required],
      documento: ['', Validators.required],
      saldo: [0, Validators.required],
      situacao: ['', Validators.required]
    });
this.getMovimentacoes();
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


  cancel() {
    this.formMovimentacao.reset();
    this.displayDialog = false;
  }

}
