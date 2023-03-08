import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../common/produto';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html'
})
export class DetalheProdutoComponent {

   @Input() produto!: Produto;

  editandoNome: boolean = false;
  editandoCodigo: boolean = false;
  editandoQuantidade: boolean = false;
  editandoSaldo: boolean = false;

  constructor(private route: ActivatedRoute) { }

  editField(field: string) {
    switch(field) {
      case 'nome':
        this.editandoNome = true;
        break;
      case 'codigo':
        this.editandoCodigo = true;
        break;
      case 'quantidadeMinima':
        this.editandoQuantidade = true;
        break;
        case 'saldo':
        this.editandoSaldo = true;
        break;
    }
  }

  cancelEdit(field: string) {
    switch(field) {
      case 'nome':
        this.editandoNome = false;
        break;
      case 'codigo':
        this.editandoCodigo = false;
        break;
      case 'quantidadeMinima':
        this.editandoQuantidade = false;
        break;
        case 'saldo':
        this.editandoSaldo = false;
        break;
    }
  }
}
