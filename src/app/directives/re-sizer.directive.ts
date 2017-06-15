import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ReSizerDirective {

  @HostBinding('style.width') @Input('resizer') inWd: string;

  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
  ) {
    //elRef.nativeElement.style.width = '300px';
    //rend.setElementStyle(elRef.nativeElement, 'width', '300px');
    //rend.setStyle(elRef.nativeElement, 'width', '300px');

    //this.inWd = '300px';
  }

  @HostListener('mouseenter') inMouse() {
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '600px');
    this.inWd = '600px';
  }

  @HostListener('mouseleave') outMouse() {
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '300px');
    this.inWd = '300px';
  }
}
