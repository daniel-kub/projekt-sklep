import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Cart } from './cart/cart';
import { MatCardModule } from '@angular/material/card';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterLink, RouterOutlet, MatButtonModule, Cart, MatCardModule],
})
export class App {
  private appService = new AppService();
  isCardActive = false;

  showCart() {
    if(this.isCardActive) {
      this.isCardActive = false;
      this.appService.isCartOpen.set(true);
    }
    else {
      this.isCardActive = true;
      this.appService.isCartOpen.set(false);
    }
  }
}