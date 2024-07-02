import { Component } from '@angular/core';
import { FraganciaCartService } from '../fragancia-cart.service';
import { Fragancia } from '../fragancia-list/Fragancia';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Fragancia[]>; 
  constructor(private cart: FraganciaCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
