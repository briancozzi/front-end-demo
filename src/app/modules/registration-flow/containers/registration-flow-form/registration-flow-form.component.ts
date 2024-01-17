import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-flow-form',
  templateUrl: './registration-flow-form.component.html',
  styleUrls: ['./registration-flow-form.component.scss'],
})
export class RegistrationFlowFormComponent implements OnInit {
  currentWorkingRouteIndex: number = 0;
  formRouters: any[] = [
    {
      name: 'Registration Steps',
      currentIndex: 0,
      isCompleted: true,
    },
    {
      name: 'Contact Info',
      link: 'contact-info',
      isCompleted: false,
    },
    {
      name: 'Select Package',
      link: 'package',
      isCompleted: false,
    },
    {
      name: 'Fundraise',
      link: 'fundraise',
      isCompleted: false,
    },
    // {
    //   name: 'Questionnaire',
    //   link: 'questionnaire',
    //   currentIndex: 4,
    //   isCompleted: false,
    // },
    {
      name: 'Checkout',
      link: 'checkout',
      isCompleted: false,
    },
    {
      name: 'Confirm',
      link: 'confirm',
      isCompleted: false,
    },
  ];
  constructor(private route: Router) {}

  ngOnInit() {
    this.getCurrentUrl();
  }

  private getCurrentUrl() {
    this.formRouters.every((elem) => {
      elem.isCompleted = true;
      if (this.route.url.includes(elem.link)) {
        elem.isCompleted = false;
        return false;
      }
      return true;
    });
  }
}
