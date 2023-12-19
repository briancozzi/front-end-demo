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
  selector: 'app-create-event-step-two',
  templateUrl: './create-event-step-two.component.html',
  styleUrls: ['./create-event-step-two.component.scss'],
  providers: [ConfirmationService],
})
export class CreateEventStepTwoComponent implements OnInit {
  event: any = {
    isMultiple: false,
    locations: [],
    isLocation: false,
  };

  @Output() OnNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() OnBack: EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('eventStepTwoForm', { static: false }) eventStepTwoForm:
    | NgForm
    | undefined;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.event.locations.push({
      name: '',
    });
  }

  next() {
    this.OnNext.emit(2);
  }

  back() {
    this.OnBack.emit();
  }

  addLocation() {
    this.event.locations.push({
      name: '',
    });
  }

  onNoLocation() {
    this.event.isLocation = true;
    this.event.isMultiple = null;
    this.event.locations.length = 0;
    this.event.locations.push({
      name: '',
    });
  }

  removeLocation(index: number) {
    this.confirmationService.confirm({
      // header: 'Are you sure?',
      // message: 'Please confirm to proceed.',
      accept: () => {
        this.event.locations.splice(index, 1);
      },
      reject: () => {},
    });
  }

  onLocationChange() {
    this.event.isLocation = null;
    if (this.event.isMultiple) {
      // if (this.event.locations.length < 2)
      //   this.event.locations.push({
      //     name: '',
      //   });
    } else {
      this.event.locations.length = 1;
    }
  }

  // removeLocation(index: number) {
  //   this.event.locations.splice(index, 1);
  // }
}
