import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component/dynamic-component.directive';

import { LoadComponentService } from 'src/app/services/load-component/load-component.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  comps: any;
  componentRef: any;
  @ViewChild(DynamicComponentDirective, { static: true })
  compHost!: DynamicComponentDirective;
  country: string = 'JP';

  constructor(
    private service: LoadComponentService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.country = localStorage.getItem('country') || 'JP';
    this.comps = this.service.getComponents();
    this.loadComponent();
  }

  loadComponent() {
    const compItem = this.comps[this.country];
    const viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();

    const factory = this.resolver.resolveComponentFactory(compItem.component);
    this.componentRef = viewContainerRef.createComponent(factory);

    this.componentRef.instance.componentData = compItem.data;
  }
}
