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
} from './components';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';

const PAGES = [RegistrationFlowComponent];
const CONTAINERS = [RegistrationFlowFormComponent];
const COMPONENTS = [
  RegistrationFormContactFormComponent,
  RegistrationFormPackageSelectionComponent,
  RegistrationFormPackageCartComponent,
];

const STANDALONES_COMP = [ConfirmationModalComponent, BaseModalComponent];
const LIB_MODULES = [
  ConfirmPopupModule,
  DropdownModule,
  AccordionModule,
  SidebarModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistrationFlowRoutes,
    ...LIB_MODULES,
    ...STANDALONES_COMP,
  ],
  declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  // declarations: [...PAGES, ...CONTAINERS, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class RegistrationFlowModule {}
