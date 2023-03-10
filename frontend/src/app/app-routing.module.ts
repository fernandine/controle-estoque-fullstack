import { NgModule } from "@angular/core";
import { provideRouter, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { DetalheMovimentacaoComponent } from "./detalhe-movimentacao/detalhe-movimentacao.component";
import { DetalheProdutoComponent } from "./detalhe-produto/detalhe-produto.component";
import { AuthGuard } from "./guards/auth.guard";
import { ListaMovimentacaoComponent } from "./listas/lista-movimentacao/lista-movimentacao.component";
import { ListaProdutoComponent } from "./listas/lista-produto/lista-produto.component";


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
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
