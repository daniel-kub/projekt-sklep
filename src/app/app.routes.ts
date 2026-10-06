import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';


export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'cart', loadComponent: () => import('./cart/cart').then(m => m.Cart)}
];