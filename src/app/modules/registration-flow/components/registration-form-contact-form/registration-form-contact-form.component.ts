import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationContact } from '@models';
import { MiscUtilitiesService, States } from '@utils';

@Component({
  selector: 'app-registration-form-contact-form',
  templateUrl: './registration-form-contact-form.component.html',
  styleUrls: ['./registration-form-contact-form.component.scss'],
})
export class RegistrationFormContactFormComponent implements OnInit {
  miscService = inject(MiscUtilitiesService);

  contactForm: RegistrationContact = {
    initial: 'Mr.',
  };
  states = States;

  @ViewChild('form', { static: false })
  form!: NgForm;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.form.value);
    this.form.form.markAllAsTouched();
    if (this.form.invalid) {
      this.miscService.scrollToError();
      return;
    }
  }

  private post() {}
}
