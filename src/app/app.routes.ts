import { Routes } from '@angular/router';
import { LoginComponent, LoginWelcomeBackComponent } from './pages';

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
    path: 'set-password',
    component: LoginWelcomeBackComponent,
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
  {
    path: 'registration-flow',
    loadChildren: () =>
      import('./modules/registration-flow/registration-flow.module').then(
        (m) => m.RegistrationFlowModule
      ),
  },
];
