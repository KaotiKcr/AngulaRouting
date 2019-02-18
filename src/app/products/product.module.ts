import { NgModule } from "@angular/core";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductEditInfoComponent } from "./product-edit/product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit/product-edit-tags.component";


@NgModule({
	imports: [ProductRoutingModule, SharedModule],
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		ProductEditComponent,
		ProductEditInfoComponent,
		ProductEditTagsComponent,
		ConvertToSpacesPipe
	]
})
export class ProductModule {}
