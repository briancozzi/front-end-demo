import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
})
export class CreateNewAccountComponent implements OnInit {
  stepNumber: number = 1;
  account: any = {
    email: 'aditya@ddd.com',
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/login']);
  }

  confirmEmail(val: any) {
    this.stepNumber = 2;
    console.log(val);
    this.account = { ...val };
  }
}
