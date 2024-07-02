import { Injectable } from '@angular/core';
import { Fragancia } from './fragancia-list/Fragancia';
import { BehaviorSubject } from 'rxjs';
// Maneja la lógica del carrito

@Injectable({
  providedIn: 'root'
})
export class FraganciaCartService {

  private _cartList: Fragancia[] = [];
  cartList: BehaviorSubject<Fragancia[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(fragancia: Fragancia) {
    let item: Fragancia | undefined = this._cartList.find((v1) => v1.nombre == fragancia.nombre);
    
    if (!item) {
      this._cartList.push({ ...fragancia });
    } else {
      item.cantidad += fragancia.cantidad;
    }

    // Actualiza el BehaviorSubject con el nuevo estado del _cartList
    this.cartList.next(this._cartList);
  }
}
