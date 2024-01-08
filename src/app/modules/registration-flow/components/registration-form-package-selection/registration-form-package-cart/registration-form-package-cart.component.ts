import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form-package-cart',
  templateUrl: './registration-form-package-cart.component.html',
  styleUrls: ['./registration-form-package-cart.component.scss'],
})
export class RegistrationFormPackageCartComponent implements OnInit {
  cartItems: any[] = [
    {
      name: 'Mulligan ',
      numberOfTickets: 4,
      price: '40000',
      qty: 1,
    },
    {
      name: 'Tee ',
      numberOfTickets: 4,
      price: '10000',
      qty: 2,
    },
  ];
  @Output() OnClose = new EventEmitter<null>();
  constructor() {}

  ngOnInit() {}
}
