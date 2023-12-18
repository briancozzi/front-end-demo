import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-event-step-one',
  templateUrl: './create-event-step-one.component.html',
  styleUrls: ['./create-event-step-one.component.scss'],
})
export class CreateEventStepOneComponent implements OnInit {
  event: any = {};
  @Output() OnNext: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('eventStepOneForm', { static: false }) eventStepOneForm: any;
  constructor() {}

  ngOnInit() {}

  next() {
    this.OnNext.emit(2);
  }
}
