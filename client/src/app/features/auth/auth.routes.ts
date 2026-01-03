import { Routes } from "@angular/router";

export const auth_routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login),
    },
    {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up').then(m => m.SignUp),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]