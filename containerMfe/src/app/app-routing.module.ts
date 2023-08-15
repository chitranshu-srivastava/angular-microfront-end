import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  {path:'', component:BaseComponent},
  {path: 'compOne', component:CompOneComponent},
  {path: 'compTwo', component:CompTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
