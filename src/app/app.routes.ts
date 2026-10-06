import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';


export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'cart', loadComponent: () => import('./cart/cart').then(m => m.Cart)},
    {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-info/product-info').then(m => m.ProductInfo),
  },
  {path:'summary', loadComponent: () => import('./summary/summary').then(m => m.Summary)},
  {path:'anulowano', loadComponent: () => import('./anulowano/anulowano').then(m => m.Anulowano)},
  {path:'sukces', loadComponent: () => import('./sukces/sukces').then(m => m.Sukces)},
];