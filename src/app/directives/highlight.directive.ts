import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnChanges {
  // * how to get the negative, positive content
  @Input()
  label: string;

  constructor(public el: ElementRef) {}

  ngOnChanges() {
    this.setLabelStyle();
  }

  setLabelStyle() {
    if (this.label) {
      switch (this.label.toLowerCase()) {
        case "positive":
          this.el.nativeElement.style.backgroundColor = "#99dbaa";
          this.el.nativeElement.style.margin = "auto";
          this.el.nativeElement.style.padding = "6px";
          this.el.nativeElement.style.borderRadius = "5%";
          this.el.nativeElement.style.width = "30px";
          break;
        case "negative":
          this.el.nativeElement.style.backgroundColor = "#ffe799";
          this.el.nativeElement.style.margin = "auto";
          this.el.nativeElement.style.padding = "5px";
          this.el.nativeElement.style.borderRadius = "5%";
          this.el.nativeElement.style.width = "30px";
          break;
        case "neutral":
          this.el.nativeElement.style.backgroundColor = "#ecf0f1";
          this.el.nativeElement.style.margin = "auto";
          this.el.nativeElement.style.padding = "8px";
          this.el.nativeElement.style.borderRadius = "5%";
          this.el.nativeElement.style.width = "30px";
          break;
        case "null":
          this.el.nativeElement.style.backgroundColor = "#94bae6";
          this.el.nativeElement.style.margin = "auto";
          this.el.nativeElement.style.padding = "6px";
          this.el.nativeElement.style.borderRadius = "5%";
          this.el.nativeElement.style.width = "30px";
          break;
        default:
          this.el.nativeElement.style.backgroundColor = "#ed8380";
          this.el.nativeElement.style.margin = "auto";
          this.el.nativeElement.style.padding = "6px";
          this.el.nativeElement.style.borderRadius = "5%";
          this.el.nativeElement.style.width = "30px";
      }
    }
  }
}
