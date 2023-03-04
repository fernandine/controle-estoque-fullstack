import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  updateMovimentacao(movimentacao: Movimentacao): Observable<Movimentacao> {
    const url = `${this.apiUrl}/${movimentacao.produtoId}`;
    return this.http.put<Movimentacao>(url, movimentacao);
  }

  deleteMovimentacao(movimentacao: Movimentacao): Observable<Movimentacao> {
    const url = `${this.apiUrl}/${movimentacao.produtoId}`;
    return this.http.delete<Movimentacao>(url);
  }

  MovimentacaoPorId(id: number): Observable<Movimentacao> {
    return this.http.get<Movimentacao>(`${this.apiUrl}/${id}`);
  }

}
