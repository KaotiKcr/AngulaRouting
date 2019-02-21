import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment.prod';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(ProductData, { delay: 777 }),
		UserModule,
		MessageModule,
		AppRoutingModule,
		StoreModule.forRoot({}),
		StoreDevtoolsModule.instrument({
			name: 'KaotiK Demo App',
			maxAge: 25,
			logOnly: environment.production
		})
	],

	declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],

	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
