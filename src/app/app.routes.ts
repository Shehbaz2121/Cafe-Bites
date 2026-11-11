import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    {path: 'search/:searchTerm', component: Home },
    {path: 'tag/:tag', component: Home },
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    {path: '**', component: Pagenotfound} 
];
