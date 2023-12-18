import { RouterModule, Routes } from '@angular/router';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewEventComponent,
  },
];

export const EventWizardSetupRoutes = RouterModule.forChild(routes);
