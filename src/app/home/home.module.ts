import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import {  HttpClientModule } from '@angular/common/http';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    BadgeModule,
    DropdownModule
  ],
  providers:[HomeService],

})
export class HomeModule { }
