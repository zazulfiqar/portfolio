import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { SharedService } from './shared_services/shared.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    // HomeModule
  ],
  providers: [HomeService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
