import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.vcr.createEmbeddedView(this.templateRef);
    }

    else{
      this.vcr.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) { }

}
