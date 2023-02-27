import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movimentacao } from 'src/app/common/movimentacao';
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
  displayDialog!: boolean;
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
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService
    ) { }

  ngOnInit(): void {
    this.getMovimentacoes();
    this.formMovimentacao = this.fb.group({
      produtoId: ['', Validators.required],
      tipoMovimento: ['', Validators.required],
      quantidade: [''],
      data: ['', Validators.required],
      motivo: [''],
      documento: [''],
      saldo: [''],
      situacao: ['']
    });
    this.getMovimentacoes();
  }

  insertMovimentacao() {
    if (this.formMovimentacao.valid) {
      this.service.createMovimentacao(this.formMovimentacao.value).subscribe(() => {
        this.notificacaoService.success('Lista adicionada com sucesso!')
        this.getMovimentacoes();
        this.formMovimentacao.reset();
          }, error => {
            this.notificacaoService.error('Erro ao adicionar lista de movimentações.');
      });
    } else {
      this.notificacaoService.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  getMovimentacoes(): void {
    this.service.getMovimentacoes()
      .subscribe(movimentacoes => this.movimentacoes = movimentacoes);
  }

  fecharDialog() {
    this.displayDialog = false;
  this.formMovimentacao.reset();
  }

}
