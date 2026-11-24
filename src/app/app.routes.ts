import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Foodpage } from './foodpage/foodpage';
import { CartPage } from './cart-page/cart-page';
export const routes: Routes = [
    {path: 'cart-page', component: CartPage},
    {path: 'food/:id', component: Foodpage},
    {path: 'search/:searchTerm', component: Home },
    {path: 'tags/:tag', component: Home },
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    {path: '**', component: Pagenotfound} 
];
