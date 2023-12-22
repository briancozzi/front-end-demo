import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { PhoneFormatDirective } from '../../../../shared/directives/phone-number-format.directive';
import { FocusInputDirective } from '../../../../shared/directives/focus-input.directive';

@Component({
  selector: 'app-forgot-password-phone-verification',
  templateUrl: './forgot-password-phone-verification.component.html',
  styleUrls: ['./forgot-password-phone-verification.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    PhoneFormatDirective,
    FocusInputDirective,
  ],
})
export class ForgotPasswordPhoneVerificationComponent implements OnInit {
  stepNumber: number = 1;
  isPhoneNumberInvalid: boolean = false;
  phoneNumber: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}

  createAccount() {
    this.router.navigate(['/create-new-account']);
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

  sendCode() {
    this.isPhoneNumberInvalid = true;
    setTimeout(() => {
      this.isPhoneNumberInvalid = false;
      this.stepNumber = 2;
    }, 3000);
  }

  submitCode() {
    this.router.navigate(['/set-password']);
  }
}
