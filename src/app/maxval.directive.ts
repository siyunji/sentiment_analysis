import { Directive , ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMaxval]'
})
export class MaxvalDirective {
  @Input()
  label: boolean;
  constructor( public el: ElementRef) {
  }
  ngOnChanges() {
    this.setLabelStyle();
  }

  setLabelStyle() {
    switch (this.label) {
      case true:
        this.el.nativeElement.style.backgroundColor = '#ed8380';
        this.el.nativeElement.style.margin = 'auto';
        this.el.nativeElement.style.padding = '5px';
        this.el.nativeElement.style.borderRadius = '5%';
        break;

      case false:
        this.el.nativeElement.style.backgroundColor = '#ffffff';
        this.el.nativeElement.style.margin = 'auto';
        this.el.nativeElement.style.padding = '5px';
        this.el.nativeElement.style.borderRadius = '5%';
        break;
    }
  }

}
