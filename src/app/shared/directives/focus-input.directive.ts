import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocusInput]',
  standalone: true,
})
export class FocusInputDirective {
  private _nextFocus: any;

  @Input('appFocusInput') set nextFocus(value: any) {
    this._nextFocus = value instanceof ElementRef ? value.nativeElement : value;
  }

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputValue = event.target.value;
    const nextElementRef = document.getElementById(this._nextFocus);

    // Check if input length is 1 and focus on the next input
    if (inputValue.length === 1 && nextElementRef) {
      nextElementRef.focus();
    }
  }
}
