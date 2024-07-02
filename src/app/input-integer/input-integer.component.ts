import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Fragancia } from '../fragancia-list/Fragancia';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  cantidad: number; 
  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  upQuantity(): void{
    if(this.cantidad < this.max){
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
      }
      else{
        this.maxReached.emit("Se alcanzó el max");
      }
  }
  downQuantity(): void{
    if(this.cantidad > 0){
       this.cantidad--;
       this.cantidadChange.emit(this.cantidad);
    }
    
  }
  changeQuantity(event: { target: any; }): void{
    console.log(event.target);
    this.cantidadChange.emit(this.cantidad);
  }
}

