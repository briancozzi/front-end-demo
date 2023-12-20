import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateNewAccountStepOneComponent } from './components';
import { CreateNewAccountStepTwoComponent } from './components/create-new-account-step-two/create-new-account-step-two.component';
import { CreateNewAccountRoutes } from './create-new-account.routing';
import { CreateNewAccountComponent } from './pages/create-new-account/create-new-account.component';

const PAGES = [CreateNewAccountComponent];
const COMPONENTS = [
  CreateNewAccountStepOneComponent,
  CreateNewAccountStepTwoComponent,
];
const LIB_MODULES = [ConfirmPopupModule, ConfirmDialogModule];

@NgModule({
  imports: [CommonModule, FormsModule, CreateNewAccountRoutes, ...LIB_MODULES],
  declarations: [...PAGES, ...COMPONENTS],
  exports: [...LIB_MODULES],
})
export class CreateNewAccountModule {}
