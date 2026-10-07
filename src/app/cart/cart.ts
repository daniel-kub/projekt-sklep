import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  imports: [MatButtonModule, MatCardModule, RouterLink, MatIconModule],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  private appService = inject(AppService);
  cartItems = this.appService.cartItems;
  products = this.appService.products;
  isCardActive = false;
  ngOnInit() {
    if(location.pathname === '/cart') {
      console.log('Cart page loaded');
      this.isCardActive = true;
    }
    else{
      console.log('Cart component loaded');
      this.isCardActive = false;
    }
  }
  get cartLength() { return this.appService.cartLength(); }
  getCartTotal() { return this.appService.cartTotal(); }

  removeItemFromCart(item: any) {
    this.appService.remove(item);
  }
  increaseItemQuantity(item: any) {
    this.appService.more(item);
  }
  decreaseItemQuantity(item: any) {
    this.appService.less(item);
  }
}