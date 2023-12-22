import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicDialogBoxComponent } from '../../shared/components/dialog-boxes/basic-dialog-box/basic-dialog-box.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    BasicDialogBoxComponent,
    ForgotPasswordComponent,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit {
  isPassword: boolean = true;
  isLoading: boolean = false;
  @ViewChild('forgotPasswordTemplate', { static: false })
  forgotPasswordTemplate!: TemplateRef<any>;
  @ViewChild('forgotPasswordDialogBox', { static: false })
  forgotPasswordDialogBox!: BasicDialogBoxComponent;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }

  createAccount() {
    this.router.navigate(['/create-new-account']);
  }

  forgotPassword() {
    this.forgotPasswordDialogBox.templateRef = this.forgotPasswordTemplate;
    this.forgotPasswordDialogBox.open();
  }
}
