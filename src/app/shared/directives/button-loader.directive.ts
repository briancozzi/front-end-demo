import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[buttonLoader]',
  standalone: true,
})
export class ButtonLoaderDirective implements OnChanges {
  @Input() buttonLoader: boolean = false; // Input property to determine whether to show the loader

  private loader: HTMLDivElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.loader = this.createLoader();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.toggleLoader(changes);
  }

  private createLoader(): HTMLDivElement {
    const loader = this.renderer.createElement('div');
    this.renderer.addClass(loader, 'loader');
    return loader;
  }

  private toggleLoader(val: any): void {
    console.log(val);
    if (val) {
      this.el.nativeElement.innerText = '';
      this.el.nativeElement.appendChild(this.loader);
      this.el.nativeElement.setAttribute('disabled', 'true');
    } else {
      this.el.nativeElement.innerText;
      this.el.nativeElement.removeChild(this.loader);
      // this.el.nativeElement.removeAttribute('disabled');
    }
  }
}
