import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class LoginComponent implements OnInit {
  isPassword: boolean = true;
  constructor(private router: Router) {}

  createAccount() {
    this.router.navigate(['/create-new-account']);
  }

  ngOnInit() {}
}
