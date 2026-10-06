/*import { Component, input, output} from '@angular/core';
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
*/

// product-list/product-list.ts
import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { ProductItem } from '../product-item/product-item';
@Component({
  imports: [ProductItem,],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})

export class ProductList {
  private appService = inject(AppService);
  products = this.appService.products;

  onItemAdded(product: { id: number; name: string; price: number }) {
    this.appService.add(product);
  }
}
