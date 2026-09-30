import { Component, input, output} from '@angular/core';
import {ProductItem} from '../product-item/product-item';
@Component({
  imports: [ProductItem,],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = input<any>();
  addToCart = output<{ id: number; name: string; price: number }>();
  onItemAdded(product: { id: number; name: string; price: number }) {
    this.addToCart.emit(product);
  }
}
