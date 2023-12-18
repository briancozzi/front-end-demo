import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.scss'],
})
export class CreateNewEventComponent implements OnInit {
  isGetStarted: boolean = true;
  constructor() {}

  ngOnInit() {}

  onGetStarted() {
    this.isGetStarted = false;
  }
}
