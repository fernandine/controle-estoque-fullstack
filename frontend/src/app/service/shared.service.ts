import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../common/produto';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private produtoSelecionado = new BehaviorSubject(null);

  produtoSelecionado$ = this.produtoSelecionado.asObservable();

  constructor() { }

  setProdutoSelecionado(produto: any) {
    this.produtoSelecionado.next(produto);
  }
}
