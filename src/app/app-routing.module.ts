import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [{ path: '', redirectTo: "/app-home",  }];

@NgModule({
  imports: [],

  exports: [RouterModule]
})

export class AppRoutingModule { }


