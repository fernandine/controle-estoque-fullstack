import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EstoqueService } from '../service/estoque.service';
import { Estoque } from '../common/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueResolver implements Resolve<Estoque> {

  constructor(private service: EstoqueService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Estoque> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: ''});
  }
}
