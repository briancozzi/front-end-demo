import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.scss'],
})
export class CreateNewEventComponent implements OnInit {
  completedSteps: number = 1;
  event: any = {};
  constructor() {}

  ngOnInit() {}

  getSteppers() {
    return Array(4)
      .fill(4, 1)
      .map((x, i) => i);
  }
}
