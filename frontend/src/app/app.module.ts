import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './primeng.module';
import { LoginComponent } from './components/login/login.component';
import { FormMovimentacaoComponent } from './formularios/form-movimentacao/form-movimentacao.component';
import { HomeComponent } from './components/home/home.component';
import { FormProdutoComponent } from './formularios/form-produto/form-produto.component';
import { ListaProdutoComponent } from './listas/lista-produto/lista-produto.component';
import { MessageService } from 'primeng/api';
import { ListaMovimentacaoComponent } from './listas/lista-movimentacao/lista-movimentacao.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { DetalheMovimentacaoComponent } from './detalhe-movimentacao/detalhe-movimentacao.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        FormMovimentacaoComponent,
        FormProdutoComponent,
        ListaMovimentacaoComponent,
        ListaProdutoComponent,
        DetalheProdutoComponent,
        DetalheMovimentacaoComponent,
        UsuariosComponent
          ],
    providers: [
      MessageService,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PrimeNgModule,

    ]
})
export class AppModule { }
