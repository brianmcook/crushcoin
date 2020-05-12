import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,   
  ],
  providers: [
  ] ,
  bootstrap: [
    AppComponent,
    HomeComponent
  ],
})
export class AppModule { }
