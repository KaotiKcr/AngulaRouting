import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot([			
			{ path: "welcome", component: WelcomeComponent },
			{ path: "", redirectTo: "welcome", pathMatch: "full" },
			{ path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    MomentModule
  ],  
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
