import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router, Routes } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { MomentModule } from "angular2-moment";

const routes: Routes = [
	{ path: "welcome", component: WelcomeComponent },
	{ path: "", redirectTo: "welcome", pathMatch: "full" },
	{ path: "**", redirectTo: "welcome", pathMatch: "full" }
];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes),
		MomentModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
