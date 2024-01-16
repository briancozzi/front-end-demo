import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-package-selection',
  templateUrl: './registration-form-package-selection.component.html',
  styleUrls: ['./registration-form-package-selection.component.scss'],
})
export class RegistrationFormPackageSelectionComponent implements OnInit {
  isCartOpen: boolean = false;
  eventPackages: any[] = [
    {
      name: 'Double Eagle',
      numberOfTickets: 4,
      price: '40000',
      qty: 0,
    },
    {
      name: 'Eagle Long package name',
      numberOfTickets: 4,
      price: '25000',
      qty: 0,
      soldOut: true,
    },
    {
      name: 'Birdie',
      numberOfTickets: 4,
      price: '10000',
      qty: 0,
      isSelected: true,
    },
    {
      name: 'Par ',
      numberOfTickets: 4,
      price: '6000',
      qty: 0,
    },
  ];
  sponsorshipPackages: any[] = [
    {
      name: 'Mulligan ',
      numberOfTickets: 4,
      price: '40000',
      qty: 0,
    },
    {
      name: 'Tee ',
      numberOfTickets: 4,
      price: '10000',
      qty: 0,
    },
  ];
  constructor() {}

  ngOnInit() {}

  continue() {
    this.isCartOpen = true;
  }

  viewCart() {
    this.isCartOpen = true;
  }
}
