import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { IgnoreIt } from './ignore-it/ignore-it';
export const routes: Routes = [
    { path: '', component: ProductList },
    { path: 'cart', component: IgnoreIt}
];
