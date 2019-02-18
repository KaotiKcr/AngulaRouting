import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

import { ProductDetailGuard } from "./product-detail.guard";

const routes: Routes = [
	{ path: "products", component: ProductListComponent },
	{
		path: "products/:id",
		component: ProductDetailComponent,
		canActivate: [ProductDetailGuard]
	},
	{
		path: "products/:id/edit",
		component: ProductEditComponent
	}
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
