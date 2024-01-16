import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlllowOnlyNumbers]',
  standalone: true,
})
export class AlllowOnlyNumbersDirective {
  constructor() {}
  @HostListener('keypress', ['$event'])
  onInputChange(e: any) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }
}
