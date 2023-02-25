import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormMovimentacaoComponent } from './components/form-movimentacao/form-movimentacao.component';
import { FormProdutoComponent } from './components/form-produto/form-produto.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'form-movimentacao', component: FormMovimentacaoComponent },
  { path: 'form-produto', component: FormProdutoComponent },
  {path: '', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
