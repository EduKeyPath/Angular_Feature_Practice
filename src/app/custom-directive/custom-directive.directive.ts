import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector : '[textHighlight]'
})

export class CustomDirectiveDirective {
  constructor(private elementRef:ElementRef, private renderer:Renderer2){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }
}
