import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-welcome-back',
  templateUrl: './login-welcome-back.component.html',
  styleUrls: ['./login-welcome-back.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginWelcomeBackComponent implements OnInit {
  isSetPassword: boolean = false;
  isPassword: boolean = false;
  isLinkExpired: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
