import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]',
  standalone: true,
})
export class PhoneFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target;
    const trimmedValue = input.value.replace(/\D/g, '');

    if (trimmedValue.length === 0) {
      input.value = '';
    } else if (trimmedValue.length <= 3) {
      input.value = `(${trimmedValue}`;
    } else if (trimmedValue.length <= 6) {
      input.value = `(${trimmedValue.slice(0, 3)}) ${trimmedValue.slice(3)}`;
    } else {
      input.value = `(${trimmedValue.slice(0, 3)}) ${trimmedValue.slice(
        3,
        6
      )}-${trimmedValue.slice(6, 10)}`;
    }
  }
}
