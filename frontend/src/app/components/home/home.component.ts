import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../common/produto';
import { Movimentacao } from '../../common/movimentacao';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  exibirListaProduto: boolean = false;
  exibirListaMovimentacao: boolean = false;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;

  constructor(private router: Router) {}



}

