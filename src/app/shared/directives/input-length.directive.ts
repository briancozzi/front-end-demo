import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[InputLengthDirective]',
  standalone: true,
})
export class InputLengthDirective {
  constructor(
    private ngModel: NgModel,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    const divElement = this.renderer.createElement('div');
    this.renderer.addClass(divElement, 'bottom-div');
    const text = this.renderer.createText('This is a bottom div.');

    // Append the text to the div
    this.renderer.appendChild(divElement, text);

    // Append the div after the input element
    this.renderer.appendChild(this.el.nativeElement.parentNode, divElement);
  }
  @HostListener('keyup', ['$event'])
  onKeyUp(e: any) {
    let value = this.ngModel.model;
    let text;
    text = value?.substr(0, 1).toUpperCase();
    this.ngModel.update.emit(text ? text + value?.substr(1) : '');
  }
}
