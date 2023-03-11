import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Movimentacao } from '../common/movimentacao';


@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly apiUrl = 'http://localhost:8080/movimentacoes';

  constructor(private http: HttpClient) { }

  getMovimentacoes(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>(this.apiUrl);
  }

  createMovimentacao(movimentacao: Movimentacao): Observable<Movimentacao> {
    return this.http.post<Movimentacao>(this.apiUrl, movimentacao);
  }

  getMovimentacaoById(produtoId: number): Observable<Movimentacao> {
    const url = `${this.apiUrl}/${produtoId}`;
    return this.http.get<Movimentacao>(url);
  }

  updateMovimentacao(movimentacoes: Movimentacao): Observable<Movimentacao> {
    const url = `${this.apiUrl}/${movimentacoes.produtoId}`;
    return this.http.put<Movimentacao>(url, movimentacoes);
  }

  deleteMovimentacao(movimentacoes: Movimentacao): Observable<void> {
    const url = `${this.apiUrl}/${movimentacoes.produtoId}`;
    return this.http.delete<void>(url);
  }

}
