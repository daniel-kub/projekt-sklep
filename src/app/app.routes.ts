import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';

import { ProductItem } from './product-item/product-item';
export const routes: Routes = [
    { path: '', component: ProductList },
    { path: 'cart', component: ProductItem}
];
