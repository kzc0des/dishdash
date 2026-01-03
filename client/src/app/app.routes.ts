import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth').then(m => m.Auth),
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.auth_routes),
    }
];
