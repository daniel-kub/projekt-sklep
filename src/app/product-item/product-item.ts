import { Component,input,output } from '@angular/core';
import {MatAnchor } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
@Component({
  imports: [MatAnchor, MatCardModule, RouterLink],
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
