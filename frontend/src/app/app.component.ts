import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { Dialog } from "primeng/dialog";
import { Subscription } from "rxjs";
import { AuthService } from "./service/auth.service";
import { StorageService } from "./service/storage.service";
import { EventBusService } from "./service/event-bus.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  @ViewChild('loginDialog') loginDialog!: Dialog;

  listaMovimentacao: boolean = true;
  listaProduto: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private eventBusService: EventBusService
    ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.isLoggedIn = this.storageService.isLoggedIn();

      this.isLoggedIn = this.storageService.isLoggedIn();

      if (this.isLoggedIn) {
        const user = this.storageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
      }

      this.eventBusSub = this.eventBusService.on('logout', () => {
        this.logout();
      });

  }

  openLoginDialog() {
    this.visible1 = true;
    this.router.navigate(['/auth/login']);
  }

  openRegisterDialog() {
    this.visible1 = true;
    this.router.navigate(['/register']);
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
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
