import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProductModule } from "./products/product.module";
import { UserModule } from "./user/user.module";
import { MessageModule } from "./messages/message.module";

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(ProductData, { delay: 333 }),
		ProductModule,
		UserModule,
		MessageModule,
		AppRoutingModule
	],
	
	declarations: [
		AppComponent,
		WelcomeComponent,
		PageNotFoundComponent
	],
	
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
