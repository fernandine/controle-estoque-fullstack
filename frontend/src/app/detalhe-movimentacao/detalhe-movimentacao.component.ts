import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimentacao } from '../common/movimentacao';

@Component({
  selector: 'app-detalhe-movimentacao',
  templateUrl: './detalhe-movimentacao.component.html'
})
export class DetalheMovimentacaoComponent {

  @Input() movimentacao!: Movimentacao;

  editandoData: boolean = false;
  editandoTipoMovimento: boolean = false;
  editandoDocumento: boolean = false;
  editandoQuantidade: boolean = false;
  editandoMotivo: boolean = false;
  editandoSaldo: boolean = false;
  editandoProduto: boolean = false;

  constructor(private route: ActivatedRoute) { }


  editField(field: string) {
    switch(field) {
      case 'produto':
        this.editandoProduto = true;
        break;
      case 'data':
        this.editandoData = true;
        break;
      case 'tipoMovimento':
        this.editandoTipoMovimento = true;
        break;
      case 'documento':
        this.editandoDocumento = true;
        break;
        case 'quantidade':
        this.editandoQuantidade = true;
        break;
        case 'motivo':
        this.editandoMotivo = true;
        break;
        case 'saldo':
        this.editandoSaldo = true;
        break;
    }
  }

  cancelEdit(field: string) {
    switch(field) {
      case 'produto':
        this.editandoProduto = false;
        break;
      case 'data':
        this.editandoData = false;
        break;
      case 'tipoMovimento':
        this.editandoTipoMovimento = false;
        break;
      case 'documento':
        this.editandoDocumento = false;
        break;
        case 'quantidade':
        this.editandoQuantidade = false;
        break;
        case 'motivo':
        this.editandoMotivo = false;
        break;
        case 'saldo':
        this.editandoSaldo = false;
        break;
    }
  }
}
