import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  listaMovimentacao: boolean = true;
  listaProduto: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  constructor() {}

  exibirListaMovimentacao() {
    this.listaMovimentacao = true;
    this.listaProduto = false;
  }

  exibirListaProduto() {
    this.listaMovimentacao = false;
    this.listaProduto = true;
  }
}

