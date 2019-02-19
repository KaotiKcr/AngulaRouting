import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const ROUTES: Routes = [
	{ path: "welcome", component: WelcomeComponent },
	{ path: "", redirectTo: "welcome", pathMatch: "full" },
	{ path: "**", component:PageNotFoundComponent  }	
];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(ROUTES
			//, { enableTracing: true}
			)		
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
