import { NgModule } from '@angular/core';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';
import { EventSetupRoutes } from './event-setup.routing';
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

const PAGES = [CreateNewEventComponent];
const CONTAINERS = [CreateEventStepsComponent];
const COMPONENTS = [
  CreateEventStepOneComponent,
  CreateEventStepTwoComponent,
  CreateEventStepThreeComponent,
];

const STANDALONES_COMP = [ConfirmationModalComponent, BaseModalComponent];
const LIB_MODULES = [
  RadioButtonModule,
  ConfirmPopupModule,
  CalendarModule,
  ConfirmDialogModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventSetupRoutes,
    ...LIB_MODULES,
    ...STANDALONES_COMP,
  ],
  declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class EventSetupModule {}
