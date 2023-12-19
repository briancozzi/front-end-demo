import { RouterModule, Routes } from '@angular/router';
import { CreateNewAccountComponent } from './pages/create-new-account/create-new-account.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewAccountComponent,
  },
];

export const CreateNewAccountRoutes = RouterModule.forChild(routes);
