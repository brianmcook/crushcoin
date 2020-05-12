import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    bootstrap: [
          AppComponent
    ],

    imports: [
          BrowserModule,
          FlexLayoutModule,
          AppRoutingModule,
          HomeComponent  
    ],

    declarations: [
          AppComponent,
          HomeComponent
    ],

    providers: [
    ],
    
    schemas: [
          NO_ERRORS_SCHEMA
  ]

})

export class AppModule { }
