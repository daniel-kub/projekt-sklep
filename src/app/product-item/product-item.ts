import { Component,input,output } from '@angular/core';
import {MatAnchor } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  imports: [MatAnchor, MatCardModule],
  selector: 'app-product-item',
  styleUrl: './product-item.scss',
  templateUrl: './product-item.html',
})
export class ProductItem {
  id=input<number>();
  name=input<string>();
  price=input<number>();
  addToCart = output<any>();
  onAddToCart() {
    this.addToCart.emit({ id: this.id(), name: this.name(), price: this.price() });
  }
}
