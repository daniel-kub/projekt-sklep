import { Component, input} from '@angular/core';
import {ProductItem} from '../product-item/product-item';
@Component({
  imports: [ProductItem,],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = input<any>();
}
