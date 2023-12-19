import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-new-account-step-two',
  templateUrl: './create-new-account-step-two.component.html',
  styleUrls: ['./create-new-account-step-two.component.scss'],
  providers: [ConfirmationService],
})
export class CreateNewAccountStepTwoComponent implements OnInit {
  isPassword: boolean = false;
  @Input() account: any = {};
  @Output() onSubmit = new EventEmitter<any>();
  constructor(
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {}

  policyConfirmation() {
    this.confirmationService.confirm({
      // header: 'Are you sure?',
      // message: 'Please confirm to proceed.',
      accept: () => {},
      reject: () => {},
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  submit() {
    this.onSubmit.emit(this.account);
  }
}
