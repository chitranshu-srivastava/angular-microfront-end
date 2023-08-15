
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[compHost]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
