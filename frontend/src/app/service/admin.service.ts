import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly apiUrl = 'http://localhost:8080/api/area';

  constructor(private http: HttpClient) { }

getAdmin(): Observable<any> {
  return this.http.get(this.apiUrl + 'admin', { responseType: 'text' });
}
}
