import { Routes } from '@angular/router';
import { LoginComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-new-account',
    loadChildren: () =>
      import('./modules/create-new-account/create-new-account.module').then(
        (m) => m.CreateNewAccountModule
      ),
  },
  {
    path: 'event-setup',
    loadChildren: () =>
      import('./modules/event-wizard-setup/event-wizard-setup.module').then(
        (m) => m.EventWizardSetupModule
      ),
  },
];
