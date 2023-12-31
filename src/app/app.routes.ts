import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "viewer",
        loadComponent: () => import('./pages/viewer/viewer.component').then(m => m.ViewerComponent)
    }
];
