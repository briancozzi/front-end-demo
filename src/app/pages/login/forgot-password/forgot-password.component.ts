import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  isInvalid: boolean = false;
  constructor() {}

  ngOnInit() {}

  onBackToLogin() {
    this.backToLogin.emit();
  }

  onSendLink() {
    this.isInvalid = true;
  }

  onCreateAccount() {
    this.createAccount.emit();
  }
}
