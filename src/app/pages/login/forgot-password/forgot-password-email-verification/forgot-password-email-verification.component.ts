import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-email-verification',
  templateUrl: './forgot-password-email-verification.component.html',
  styleUrls: ['./forgot-password-email-verification.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ForgotPasswordEmailVerificationComponent implements OnInit {
  email!: string;
  isEmailSend: boolean = false;
  isEmailInvalid: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSendLink() {
    this.isEmailInvalid = true;
    setTimeout(() => {
      this.isEmailInvalid = false;
      this.isEmailSend = true;
    }, 2000);
  }

  onCreateAccount() {
    this.router.navigate(['/create-new-account']);
  }

  goToSetPassword() {
    this.router.navigate(['/set-password']);
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
