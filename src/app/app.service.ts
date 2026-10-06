import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  products = signal<any[]>([
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 },
  ]);

  cartItems = signal<any[]>([]);
  cartLength = computed(() => this.cartItems().length);
  
  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => {
      const product = this.products().find(p => p.id === item.id);
      return sum + (product?.price ?? 0) * item.pieces;
    }, 0)
  );

  add(product: any) {
    this.cartItems.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        return items.map(i =>
          i.id === product.id ? { ...i, pieces: i.pieces + 1 } : i
        );
      }
      return [...items, { id: product.id, pieces: 1 }];
    });
  }

  remove(item: any) {
    this.cartItems.update(items => items.filter(i => i.id !== item.id));
  }
}