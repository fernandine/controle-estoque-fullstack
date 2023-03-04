import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../common/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  getProdutoSelecionado(): any {
    throw new Error('Method not implemented.');
  }

  private readonly apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const url = `${this.apiUrl}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  deleteProduto(produto: Produto): Observable<Produto> {
    const url = `${this.apiUrl}/${produto.id}`;
    return this.http.delete<Produto>(url);
  }

  produtoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }


}
