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
  selector: 'app-create-event-step-four',
  templateUrl: './create-event-step-four.component.html',
  styleUrls: ['./create-event-step-four.component.scss'],
  providers: [ConfirmationService],
})
export class CreateEventStepFourComponent implements OnInit {
  event: any = {
    tickets: [],
    isSponsorship: true,
  };

  @Output() OnNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() OnBack: EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('eventStepFourForm', { static: false }) eventStepFourForm:
    | NgForm
    | undefined;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.event.tickets.push({
      name: '',
      price: '',
    });
  }

  next() {
    this.OnNext.emit(2);
  }

  back() {
    this.OnBack.emit();
  }

  addTicket() {
    this.event.tickets.push({
      name: '',
    });
  }

  onNoLocation() {
    this.event.isSponsorship = null;
    this.event.tickets.length = 0;
    this.event.tickets.push({
      name: '',
    });
  }

  removeLocation(index: number) {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.event.tickets.splice(index, 1);
      },
      reject: () => {},
    });
  }

  onLocationChange() {
    if (this.event.isSponsorship) {
      // if (this.event.tickets.length < 2)
      //   this.event.tickets.push({
      //     name: '',
      //     price: '',
      //   });
    } else {
      this.event.tickets.length = 1;
      this.event.tickets[0] = {
        name: '',
        price: '',
      };
    }
  }

  // removeLocation(index: number) {
  //   this.event.tickets.splice(index, 1);
  // }
}
