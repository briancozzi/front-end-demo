import { NgModule } from '@angular/core';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';
import { EventWizardSetupRoutes } from './event-wizard-setup.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateEventStepsComponent } from './containers/create-event-steps/create-event-steps.component';
import {
  CreateEventStepOneComponent,
  CreateEventStepThreeComponent,
  CreateEventStepTwoComponent,
} from './components';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CalendarModule } from 'primeng/calendar';
import {
  BaseModalComponent,
  ConfirmationModalComponent,
} from '../../shared/components/modals';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateEventStepFourComponent } from './components/create-event-step-four/create-event-step-four.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

const PAGES = [CreateNewEventComponent];
const CONTAINERS = [CreateEventStepsComponent];
const COMPONENTS = [
  CreateEventStepOneComponent,
  CreateEventStepTwoComponent,
  CreateEventStepThreeComponent,
  CreateEventStepFourComponent,
];

const STANDALONES_COMP = [ConfirmationModalComponent, BaseModalComponent];
const LIB_MODULES = [
  RadioButtonModule,
  ConfirmPopupModule,
  CalendarModule,
  ConfirmDialogModule,
  DropdownModule,
  InputTextModule,
  InputNumberModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventWizardSetupRoutes,
    ...LIB_MODULES,
    ...STANDALONES_COMP,
  ],
  declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class EventWizardSetupModule {}
