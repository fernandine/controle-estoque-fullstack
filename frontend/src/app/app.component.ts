import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  listaMovimentacao: boolean = true;
  listaProduto: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;


  exibirListaMovimentacao() {
    this.listaMovimentacao = true;
    this.listaProduto = false;
  }

  exibirListaProduto() {
    this.listaMovimentacao = false;
    this.listaProduto = true;
  }
}
