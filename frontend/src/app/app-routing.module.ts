import { NgModule } from "@angular/core";
import { provideRouter, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { DetalheMovimentacaoComponent } from "./detalhe-movimentacao/detalhe-movimentacao.component";
import { DetalheProdutoComponent } from "./detalhe-produto/detalhe-produto.component";
import { ListaMovimentacaoComponent } from "./listas/lista-movimentacao/lista-movimentacao.component";
import { ListaProdutoComponent } from "./listas/lista-produto/lista-produto.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserComponent } from './components/user/user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'produtos/:id', component: DetalheProdutoComponent },
  { path: 'movimentacoes', component: ListaMovimentacaoComponent },
  { path: 'movimentacoes/:produtoId', component: DetalheMovimentacaoComponent },
  { path: '', component: ListaMovimentacaoComponent },
  { path: '', redirectTo: '/movimentacoes', pathMatch: 'full' },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}
