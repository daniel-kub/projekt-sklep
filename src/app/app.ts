import { Component} from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Router} from '@angular/router';
import { Cart } from './cart/cart';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [ProductList, Cart, MatTabsModule],
})
export class App {
  url: string;

  constructor(private router: Router) {
    this.url = this.router.url;
  }

  products:any = [
{ id: 1, name: 'Klawiatura', price: 199 },
{ id: 2, name: 'Mysz', price: 99 },
{ id: 3, name: 'Monitor', price: 899 },
{ id: 4, name: 'Słuchawki', price: 149 }
];
insideCart:any[] = [];

onAddToCart(product: any) {
  const existingProduct = this.insideCart.find(
    (item: any) => item.id === product.id
  );
  

  if (existingProduct) {
    console.log("znaleziono produkt w koszyku:", existingProduct);
    existingProduct.pieces += 1;
  } else {
    this.insideCart.push({
      id: product.id,
      pieces: 1
    });
  }

  console.log('Produkt dodany do koszyka:', product);
  console.log('Zawartość koszyka:', this.insideCart);
}
onRemoveFromCart($event: any) {
  this.insideCart = this.insideCart.filter((item: any) => item.id !== $event.id);
}

}
