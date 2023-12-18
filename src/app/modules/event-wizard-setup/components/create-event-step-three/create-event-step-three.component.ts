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
    // startTime: any;
    endDate: any;
    // endTime: any;
    timezone: string;
    isMultiple: boolean;
  } = {
    startDate: '',
    // startTime: '',
    endDate: '',
    // endTime: '',
    timezone: '',
    isMultiple: false,
  };
  timezones: any[] = [
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
  ];

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

  onEventTypeChange() {
    if (!this.event.isMultiple) {
      this.event.endDate = '';
    }
  }
}
