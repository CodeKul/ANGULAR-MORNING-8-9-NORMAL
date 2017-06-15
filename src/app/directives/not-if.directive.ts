import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[notIf]'
})
export class NotIfDirective {

  @Input() set notIf(con: boolean) {
    if (!con) {
      this.vcRf.createEmbeddedView(this.tmpRef);
    }
    else {
      this.vcRf.clear();
    }
  }
  constructor(
    private vcRf: ViewContainerRef,
    private tmpRef: TemplateRef<any>
  ) {

  }
}
