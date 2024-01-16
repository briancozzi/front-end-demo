import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-fundraise',
  templateUrl: './registration-form-fundraise.component.html',
  styleUrls: ['./registration-form-fundraise.component.scss'],
})
export class RegistrationFormFundraiseComponent implements OnInit {
  paymentMethod: 'PAYMENT' | 'CREDIT' = 'CREDIT';
  constructor() {}

  ngOnInit() {}

  changePaymentMethod(method: 'PAYMENT' | 'CREDIT') {
    this.paymentMethod = method;
  }
}
