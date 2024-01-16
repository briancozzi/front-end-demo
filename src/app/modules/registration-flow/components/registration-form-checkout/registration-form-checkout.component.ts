import { Component, OnInit } from '@angular/core';
import * as cardValidator from 'card-validator';

@Component({
  selector: 'app-registration-form-checkout',
  templateUrl: './registration-form-checkout.component.html',
  styleUrls: ['./registration-form-checkout.component.scss'],
})
export class RegistrationFormCheckoutComponent implements OnInit {
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
  states: string[] = [
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
  ];
  paymentMethods: string[] = ['Credit Card', 'Check'];
  selectPaymentMethod: string = 'Credit Card';
  contactForm: any = {
    initial: 'Mr.',
  };
  constructor() {}

  ngOnInit() {}
}
