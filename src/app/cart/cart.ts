import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  cartItems = input<any[]>();
  products = input<any[]>();
  cartLength = this.cartItems()?.length;
getCartTotal(): number {
    return this.cartItems()?.reduce((total, item) => {
      const product = this.products()?.find(p => p.id === item.id);

      return total + (product?.price ?? 0) * item.pieces;
    }, 0) ?? 0;
  }
}

