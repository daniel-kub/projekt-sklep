import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  template:'<app-product-list [products]="products"></app-product-list>',
  imports: [ProductList],
})
export class App {
  products:any = [
{ id: 1, name: 'Klawiatura', price: 199 },
{ id: 2, name: 'Mysz', price: 99 },
{ id: 3, name: 'Monitor', price: 899 },
{ id: 4, name: 'Słuchawki', price: 149 }
];

}
