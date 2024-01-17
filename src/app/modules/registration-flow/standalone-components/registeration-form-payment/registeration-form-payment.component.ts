import { Component, OnInit } from '@angular/core';
import { StripeElementsOptions } from '@stripe/stripe-js';
import {
  injectStripe,
  StripeElementsDirective,
  StripePaymentElementComponent,
} from 'ngx-stripe';

@Component({
  selector: 'app-registeration-form-payment',
  templateUrl: './registeration-form-payment.component.html',
  styleUrls: ['./registeration-form-payment.component.scss'],
  standalone: true,
  imports: [StripeElementsDirective, StripePaymentElementComponent],
})
export class RegisterationFormPaymentComponent implements OnInit {
  stripe: any = injectStripe(
    'pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'
  );
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    // passing the client secret obtained from the server
    clientSecret:
      'seti_1Mm8s8LkdIwHu7ix0OXBfTRG_secret_NXDICkPqPeiBTAFqWmkbff09lRmSVXe ',
  };
  constructor() {}

  ngOnInit() {
    // console.log(this.stripe);
  }
}
