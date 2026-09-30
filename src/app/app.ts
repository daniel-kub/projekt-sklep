import { Component} from '@angular/core';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  template:'<app-product-list [products]="products" (addToCart)="onAddToCart($event)"></app-product-list>',
  imports: [ProductList],
})
export class App {
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

}
