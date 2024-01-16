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
  RegistrationFormPackageCartComponent,
  RegistrationFormCheckoutComponent,
  RegistrationFormFundraiseComponent,
  RegistrationFormCheckoutTicketComponent,
  RegisterationFormPaymentComponent,
} from './components';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgxStripeModule } from 'ngx-stripe';

const PAGES = [RegistrationFlowComponent];
const CONTAINERS = [RegistrationFlowFormComponent];
const COMPONENTS = [
  RegistrationFormContactFormComponent,
  RegistrationFormPackageSelectionComponent,
  RegistrationFormPackageCartComponent,
  RegistrationFormCheckoutComponent,
  RegistrationFormFundraiseComponent,
  RegistrationFormCheckoutTicketComponent,
  RegisterationFormPaymentComponent,
];

const STANDALONES_COMP = [ConfirmationModalComponent, BaseModalComponent];
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
    NgxStripeModule.forRoot('***your-stripe-publishable-key***'),
    FormsModule,
    RegistrationFlowRoutes,
    ...LIB_MODULES,
    ...STANDALONES_COMP,
  ],
  declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class RegistrationFlowModule {}
