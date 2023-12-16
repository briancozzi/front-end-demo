import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'event-setup',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'event-setup',
    loadChildren: () =>
      import('./modules/event-setup/event-setup.module').then(
        (m) => m.EventSetupModule
      ),
  },
];
