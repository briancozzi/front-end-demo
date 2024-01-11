import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-registration-flow',
  templateUrl: './registration-flow.component.html',
  styleUrls: ['./registration-flow.component.scss'],
})
export class RegistrationFlowComponent implements OnInit, AfterViewInit {
  @ViewChild('tw2') typewriterElement2!: ElementRef;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    console.log(this.typewriterElement2);
    const target = this.typewriterElement2.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 140,
      deleteSpeed: 140,
    });
    writer
      .type(
        `FRIDAY MAY 6, 2024 213123 213123 213123 2131231 21312 213123 21312 3`
      )
      .rest(1000)
      .start()
      .changeTypeColor('white');
  }
}
