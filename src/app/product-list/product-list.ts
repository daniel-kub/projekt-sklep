import { Component } from '@angular/core';
import {App} from '../app';
import {ProductItem} from '../product-item/product-item';
@Component({
  imports: [ProductItem,],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = input<{ id: number; name: string; price: number }[]>();
}
