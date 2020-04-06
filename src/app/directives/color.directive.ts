import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  @Input('appColor') defaultColor: string = 'grey';
  @Input() mouseOverColor: string = 'blue';

  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // don't change element directly
    // this.elementRef.nativeElement.style.color = 'red';

    this.color = this.defaultColor;

    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      this.defaultColor
    );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.mouseOverColor);
    // OR
    this.color = this.mouseOverColor;
  }
}
