import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Estoque } from '../common/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private readonly API = 'movimentacoes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Estoque[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Estoque>(`${this.API}/${id}`);
  }

  save(record: Partial<Estoque>) {
    // console.log(record);
    if (record.id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Estoque>) {
    return this.httpClient.post<Estoque>(this.API, record).pipe(first());
  }

  private update(record: Partial<Estoque>) {
    return this.httpClient.put<Estoque>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
