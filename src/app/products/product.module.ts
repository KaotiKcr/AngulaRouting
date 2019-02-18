import { NgModule } from "@angular/core";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductEditComponent } from "./product-edit/product-edit.component";


@NgModule({
	imports: [ProductRoutingModule, SharedModule],
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		ProductEditComponent,
		ConvertToSpacesPipe
	]
})
export class ProductModule {}
