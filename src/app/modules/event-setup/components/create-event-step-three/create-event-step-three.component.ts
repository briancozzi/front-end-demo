import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-event-step-three',
  templateUrl: './create-event-step-three.component.html',
  styleUrls: ['./create-event-step-three.component.scss'],
  providers: [ConfirmationService],
})
export class CreateEventStepThreeComponent implements OnInit {
  event: {
    startDate: any;
    startTime: any;
    endDate: any;
    endTime: any;
  } = { startDate: '', startTime: '', endDate: '', endTime: '' };

  @Output() OnNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() OnBack: EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('eventStepThreeForm', { static: false }) eventStepThreeForm:
    | NgForm
    | undefined;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    // this.event.dates.push({ date: '' });
  }

  next() {
    this.OnNext.emit(2);
  }

  back() {
    this.OnBack.emit();
  }

  // addDates() {
  //   this.event.dates.push({
  //     date: '',
  //   });
  // }

  // onDateChange() {
  //   if (this.event.isMultiple) {
  //     if (this.event.dates.length < 2)
  //       this.event.dates.push({
  //         name: '',
  //       });
  //   } else {
  //     this.event.dates.length = 1;
  //   }
  // }
}
