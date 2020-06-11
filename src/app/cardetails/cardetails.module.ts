import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardetailsRoutingModule } from './cardetails-routing.module';
import { CardetailsComponent } from './cardetails.component';


@NgModule({
  declarations: [CardetailsComponent],
  imports: [
    CommonModule,
    CardetailsRoutingModule
  ]
})
export class CardetailsModule { }
