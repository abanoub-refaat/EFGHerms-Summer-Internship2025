import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((module) => module.Home);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./todos/todos').then((module) => module.Todos);
    },
  },
];
