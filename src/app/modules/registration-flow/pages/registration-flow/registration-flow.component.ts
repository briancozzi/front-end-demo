import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Typewriter from './../../../../../assets/vendors/t-writer.js/type-writer.js';

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
    const target = this.typewriterElement2.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 140,
      deleteSpeed: 140,
    });
    writer
      .strings(400, 'FRIDAY MAY 6, 2024', 'LETS PARTY TOGETHER')
      .changeTypeColor('white')
      .rest(2000)
      .start();
  }
}
