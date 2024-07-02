import { Component, OnInit } from '@angular/core';
import { Fragancia } from './Fragancia'; 
import { FraganciaCartService } from '../fragancia-cart.service';
import { FraganciaDataService } from '../fragancia-data.service';

@Component({
  selector: 'app-fragancia-list',
  templateUrl: './fragancia-list.component.html',
  styleUrl: './fragancia-list.component.scss'
})
export class FraganciaListComponent{
  fragancias : Fragancia [] = [];
 
  constructor(
    private cart: FraganciaCartService,
    private fraganciasDataService: FraganciaDataService){
   
  }
  ngOnInit(): void{
    this.fraganciasDataService.getAll()
    .subscribe(fragancias => this.fragancias = fragancias);
  }
 addToCart(fragancia: Fragancia): void{
  this.cart.addToCart(fragancia);
  fragancia.stock -= fragancia.cantidad;
  fragancia.cantidad = 0;
 } 

 maxReached(m: String){
  alert(m);
 }
};

