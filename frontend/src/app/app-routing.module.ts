import { NgModule } from "@angular/core";
import { provideRouter, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./formularios/login/login.component";
import { DetalheMovimentacaoComponent } from "./detalhes/detalhe-movimentacao/detalhe-movimentacao.component";
import { DetalheProdutoComponent } from "./detalhes/detalhe-produto/detalhe-produto.component";
import { ListaMovimentacaoComponent } from "./listas/lista-movimentacao/lista-movimentacao.component";
import { ListaProdutoComponent } from "./listas/lista-produto/lista-produto.component";
import { UserComponent } from './listas/user/user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'produtos/:id', component: DetalheProdutoComponent },
  { path: 'movimentacoes', component: ListaMovimentacaoComponent },
  { path: 'movimentacoes/:produtoId', component: DetalheMovimentacaoComponent },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}
