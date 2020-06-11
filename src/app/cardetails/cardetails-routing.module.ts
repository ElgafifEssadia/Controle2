import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardetailsComponent } from './cardetails.component';

const routes: Routes = [{ path: '', component: CardetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardetailsRoutingModule { }
