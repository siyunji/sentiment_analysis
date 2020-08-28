import { Directive , ElementRef, Input, OnChanges } from '@angular/core';
@Directive({
  selector: '[appComplete]'
})
export class CompleteDirective {
  @Input()
  label:string;
  constructor(public el: ElementRef) { }
  ngOnChanges(){
    this.setLabelStyle();
  }
  setLabelStyle() {
    switch (this.label) {
      case "completed":
        this.el.nativeElement.style.backgroundColor = 'rgb(153, 219, 170)';
        this.el.nativeElement.style.margin = 'auto';
        this.el.nativeElement.style.padding = '5px';
        this.el.nativeElement.style.borderRadius = '5%';
        break;

      case "pending":
        this.el.nativeElement.style.backgroundColor = 'rgb(255, 231, 153)';
        this.el.nativeElement.style.margin = 'auto';
        this.el.nativeElement.style.padding = '5px';
        this.el.nativeElement.style.borderRadius = '5%';
        break;
    }
  }

}
