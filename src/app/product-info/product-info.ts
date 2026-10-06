import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AppService } from '../app.service';
import { output } from '@angular/core';
import { MatCard } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-info',
  standalone: true,
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
  imports: [MatButtonModule],
})
export class ProductInfo {
  private route = inject(ActivatedRoute);
  private appService = inject(AppService);

  id = toSignal(this.route.paramMap.pipe(map(p => p.get('id'))));

  product = computed(() => {
    const id = this.id();
    if(this.appService.products().length === 0 || !id) {
      return null;
    }
    else{
      return this.appService.products().find(p => p.id === Number(id));
    }
    
  });
  p = this.product();
    addToCart = output<any>();
  onAddToCart() {
    this.appService.add(this.p);
  }
}