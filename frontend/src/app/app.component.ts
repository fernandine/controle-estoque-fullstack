import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { Dialog } from "primeng/dialog";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';

  @ViewChild('loginDialog') loginDialog!: Dialog;

  listaMovimentacao: boolean = true;
  listaProduto: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router
    ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  openLoginDialog() {
    this.visible1 = true;
    this.router.navigate(['/auth/login']);
  }

  exibirListaMovimentacao() {
    this.listaMovimentacao = true;
    this.listaProduto = false;
  }

  exibirListaProduto() {
    this.listaMovimentacao = false;
    this.listaProduto = true;
  }
}
