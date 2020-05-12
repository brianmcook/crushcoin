import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { Router } from "@angular/router";

@NgModule({
    bootstrap: [
          AppComponent
    ],

    imports: [
          BrowserModule,
          FlexLayoutModule,
          AppRoutingModule,
      
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
