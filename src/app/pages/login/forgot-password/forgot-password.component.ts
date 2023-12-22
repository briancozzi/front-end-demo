import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() backToLogin = new EventEmitter();
  @Output() createAccount = new EventEmitter();
  email!: string;
  isEmailSend: boolean = false;
  isEmailInvalid: boolean = false;
  selectedValidationMethod: string = 'DEFAULT';
  selectedValidationMode: any = null;
  // isInvalid: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  onBackToLogin() {
    this.backToLogin.emit();
  }

  onSendLink() {
    this.isEmailInvalid = true;
  }

  onCreateAccount() {
    this.createAccount.emit();
  }

  goToSetPassword() {
    this.router.navigate(['/set-password']);
  }

  selectValidationMode(val: any) {
    this.selectedValidationMode = val;
  }

  onValidationModeConfirm() {
    this.selectedValidationMethod = this.selectedValidationMode;
  }
}
