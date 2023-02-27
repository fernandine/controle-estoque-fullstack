import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormMovimentacaoComponent } from './formularios/form-movimentacao/form-movimentacao.component';
import { FormProdutoComponent } from './formularios/form-produto/form-produto.component';
import { ListaMovimentacaoComponent } from './listas/lista-movimentacao/lista-movimentacao.component';
import { ListaProdutoComponent } from './listas/lista-produto/lista-produto.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'form-movimentacao', component: FormMovimentacaoComponent },
  { path: 'form-produto', component: FormProdutoComponent },
  { path: 'produtos', component:  ListaProdutoComponent},
  { path: 'produtos/:id', component: ListaProdutoComponent},
  { path: 'movimentacoes', component: ListaMovimentacaoComponent },
  {path: '', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
