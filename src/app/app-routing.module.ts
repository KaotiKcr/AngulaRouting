import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

const ROUTES: Routes = [
	{ path: 'welcome', component: WelcomeComponent },
	{
		path: 'products',
		canActivate: [AuthGuard],
		data: { preload: true },
		loadChildren: './products/product.module#ProductModule'
	},
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(
			ROUTES,
			//, { enableTracing: true}
			{ preloadingStrategy: SelectiveStrategy }
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
