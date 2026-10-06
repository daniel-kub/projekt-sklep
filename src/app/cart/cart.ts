import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, MatCardModule, RouterLink],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  private appService = inject(AppService);
  cartItems = this.appService.cartItems;
  products = this.appService.products;

  get cartLength() { return this.appService.cartLength(); }
  getCartTotal() { return this.appService.cartTotal(); }

  removeItemFromCart(item: any) {
    this.appService.remove(item);
  }
}