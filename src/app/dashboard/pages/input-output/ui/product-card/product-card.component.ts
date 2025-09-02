import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface.js';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

  // @Input({
  //   required: true
  // }) public product!: Product;

  public product = input.required<Product>()

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(){
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

}
