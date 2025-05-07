import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: '[customNgIf]'
})

export class IfDirectiveDirective {
  private isDivShow = false;

  constructor(private viewContainerRef:ViewContainerRef, private templateRef:TemplateRef<any>){

  }

  @Input() set customNgIf(what:boolean){
    if(what && !this.isDivShow){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isDivShow = true;
    }
    else if(!what && this.isDivShow){
      this.viewContainerRef.clear();
      this.isDivShow = false;
    }
  }


}