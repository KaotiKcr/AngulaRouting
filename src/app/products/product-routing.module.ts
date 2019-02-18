import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

import { ProductDetailGuard } from "./product-detail.guard";
import { ProductResolver } from "./product-resolver.service";
import { ProductEditInfoComponent } from "./product-edit/product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit/product-edit-tags.component";

const routes: Routes = [
	{
		path: "products",
		children: [{
			path: '',
			component: ProductListComponent
		}, {
			path: ':id',
			component: ProductDetailComponent,
			// canActivate: [ProductDetailGuard],
			resolve: { resolvedData: ProductResolver }
		}, {
			path: ':id/edit',
			component: ProductEditComponent,
			resolve: { resolvedData: ProductResolver },
			children: [
				{ path: '', redirectTo: 'info', pathMatch: 'full' },
				{ path: 'info', component: ProductEditInfoComponent },
				{ path: 'tags', component: ProductEditTagsComponent }
			]
		}]
	},

];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
