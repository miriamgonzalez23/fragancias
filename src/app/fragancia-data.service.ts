import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Fragancia } from './fragancia-list/Fragancia';

const URL = 'https://6683331c4102471fa4c96ee3.mockapi.io/api/v1/fragancias';

@Injectable({
  providedIn: 'root'
})
export class FraganciaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Fragancia[]>{
    return this.http.get<Fragancia[]>(URL)
    .pipe(
      tap((fragancias: Fragancia[]) => fragancias.forEach(fragancia => fragancia.cantidad = 0))
     
    );
  }
}
