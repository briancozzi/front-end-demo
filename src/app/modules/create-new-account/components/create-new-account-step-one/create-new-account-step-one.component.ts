import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-account-step-one',
  templateUrl: './create-new-account-step-one.component.html',
  styleUrls: ['./create-new-account-step-one.component.scss'],
})
export class CreateNewAccountStepOneComponent implements OnInit {
  _account: any = {};
  @Input() set account(val: any) {
    this._account = { ...val };
  }
  @Output() onContinue = new EventEmitter<any>();
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    console.log('dsa');
    this.onContinue.emit(this._account);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
