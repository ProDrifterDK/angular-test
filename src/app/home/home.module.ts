import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpecialDatePipe } from '../special-date.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    SpecialDatePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
