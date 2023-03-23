import { Component, OnInit, ViewChild } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { AuthService } from "./service/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';

  isLoggedIn: boolean = false;
  listaMovimentacao: boolean = true;
  listaProduto: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  constructor(
    private authService: AuthService,
    private primengConfig: PrimeNGConfig
    ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.isLoggedIn = this.authService.isAuthenticated();
  };

  openLoginDialog() {
    this.visible1 = true;
  }

  exibirListaMovimentacao() {
    this.listaMovimentacao = true;
    this.listaProduto = false;
  }

  exibirListaProduto() {
    this.listaMovimentacao = false;
    this.listaProduto = true;
  }

  logout(): void {
   this.authService.logout();
   window.location.reload();
  }
}
