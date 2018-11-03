import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ProductModule } from "./products/product.module";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
	declarations: [
		AppComponent, 
		WelcomeComponent
	],
	imports: [
		BrowserModule,		
		HttpModule,
		HttpClientModule,				
		ProductModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
