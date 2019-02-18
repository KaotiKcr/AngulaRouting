import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "products",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
	pageTitle: string = "Product List";
	showImage: boolean = false;
	errorMessage = "";

	private _listFilter: string = "";
	get listFilter() {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter
			? this.performFilter(this.listFilter)
			: this.products;
	}

	filteredProducts: IProduct[];
	products: IProduct[] = [];
	constructor(private productService: ProductService, private route: ActivatedRoute) { }
	ngOnInit(): void {
		this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
		this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';

		this.productService.getProducts().subscribe(
			products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error => (this.errorMessage = <any>error)
		);
	}
	toggleImage(): void {
		this.showImage = !this.showImage;
	}
	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter(
			(product: IProduct) =>
				product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
		);
	}

	onRatingClicked(message: string): void {
		this.pageTitle = "Product List: " + message;
	}
}
