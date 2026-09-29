import { Component,input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-item',
  styleUrl: './product-item.scss',
  templateUrl: './product-item.html',
})
export class ProductItem {
  id=input<number>();
  name=input<string>();
  price=input<number>();
}
