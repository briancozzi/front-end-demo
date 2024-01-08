import { RouterModule, Routes } from '@angular/router';
import { RegistrationFlowComponent } from './pages/registration-flow/registration-flow.component';
import {
  RegistrationFormContactFormComponent,
  RegistrationFormPackageSelectionComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFlowComponent,
    children: [
      {
        path: '',
        redirectTo: 'contact-info',
        pathMatch: 'full',
      },
      {
        path: 'contact-info',
        component: RegistrationFormContactFormComponent,
      },
      {
        path: 'package',
        component: RegistrationFormPackageSelectionComponent,
      },
    ],
  },
];

export const RegistrationFlowRoutes = RouterModule.forChild(routes);
