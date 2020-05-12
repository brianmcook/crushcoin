import { Component, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})

export class HomeComponent {
 
  constructor(private router: Router) {
   }

}
