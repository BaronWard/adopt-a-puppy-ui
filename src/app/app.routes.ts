import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PuppyDetailsComponent } from './features/puppy-details/puppy-details.component';

export const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent,
    },
    {
        path: 'puppy/:id',
        component: PuppyDetailsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
