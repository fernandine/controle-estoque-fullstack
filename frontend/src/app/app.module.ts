import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { DetalheMovimentacaoComponent } from './detalhes/detalhe-movimentacao/detalhe-movimentacao.component';
import { FormMovimentacaoComponent } from './formularios/form-movimentacao/form-movimentacao.component';
import { FormProdutoComponent } from './formularios/form-produto/form-produto.component';
import { LoginComponent } from './formularios/login/login.component';
import { ListaMovimentacaoComponent } from './listas/lista-movimentacao/lista-movimentacao.component';
import { ListaProdutoComponent } from './listas/lista-produto/lista-produto.component';
import { UserComponent } from './listas/user/user.component';
import { PrimeNgModule } from './primeng.module';
import { StatusRolePipe } from './status-role.pipe';
import { NotificacaoService } from './service/notificacao.service';
import { TokenInterceptor } from './token.interceptor';
import { DetalheProdutoComponent } from './detalhes/detalhe-produto/detalhe-produto.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FormMovimentacaoComponent,
        FormProdutoComponent,
        ListaMovimentacaoComponent,
        ListaProdutoComponent,
        DetalheMovimentacaoComponent,
        DetalheProdutoComponent,
        UserComponent,
        StatusRolePipe,
        HomeComponent
          ],
    providers: [
      MessageService,
      NotificacaoService,
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
