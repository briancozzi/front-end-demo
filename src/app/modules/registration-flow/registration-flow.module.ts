import { NgModule } from '@angular/core';
import { RegistrationFlowRoutes } from './registration-flow.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {
  BaseModalComponent,
  ConfirmationModalComponent,
} from '../../shared/components/modals';
import { DropdownModule } from 'primeng/dropdown';
import { RegistrationFlowComponent } from './pages/registration-flow/registration-flow.component';
import { RegistrationFlowFormComponent } from './containers';
import {
  RegistrationFormContactFormComponent,
  RegistrationFormPackageSelectionComponent,
  RegistrationFormCheckoutComponent,
  RegistrationFormFundraiseComponent,
  RegistrationFormCheckoutTicketComponent,
} from './components';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  RegisterationFormPaymentComponent,
  RegistrationFormPackageCartComponent,
} from './standalone-components';

const PAGES = [RegistrationFlowComponent];
const CONTAINERS = [RegistrationFlowFormComponent];
const COMPONENTS = [
  RegistrationFormContactFormComponent,
  RegistrationFormPackageSelectionComponent,
  RegistrationFormCheckoutComponent,
  RegistrationFormFundraiseComponent,
  RegistrationFormCheckoutTicketComponent,
];

const STANDALONES_COMPONENTS = [
  ConfirmationModalComponent,
  BaseModalComponent,

  // Module Components
  RegisterationFormPaymentComponent,
  RegistrationFormPackageCartComponent,
];
const LIB_MODULES = [
  ConfirmPopupModule,
  DropdownModule,
  AccordionModule,
  SidebarModule,
  AutoCompleteModule,
  CheckboxModule,
  RadioButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistrationFlowRoutes,
    ...LIB_MODULES,
    ...STANDALONES_COMPONENTS,
  ],
  declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class RegistrationFlowModule {}
