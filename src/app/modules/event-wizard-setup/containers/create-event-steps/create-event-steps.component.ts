import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-steps',
  templateUrl: './create-event-steps.component.html',
  styleUrls: ['./create-event-steps.component.scss'],
})
export class CreateEventStepsComponent implements OnInit {
  completedSteps: number = 1;
  event: any = {};
  constructor() {}

  ngOnInit() {}

  getSteppers() {
    return Array(4)
      .fill(4, 1)
      .map((x, i) => i);
  }

  onNext(stepNumber: number) {
    this.completedSteps += 1;
  }

  onBack() {
    this.completedSteps -= 1;
  }
}
