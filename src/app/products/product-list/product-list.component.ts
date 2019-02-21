import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
	selector: 'products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	showImage: boolean = false;
	displayCode: boolean = false;
	errorMessage = '';

	private _listFilter: string = '';
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
	constructor(
		private productService: ProductService,
		private route: ActivatedRoute,
		private store: Store<any>
	) {}
	ngOnInit(): void {
		this.productService.getProducts().subscribe(
			products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error => (this.errorMessage = <any>error)
		);

		this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
		this.showImage =
			this.route.snapshot.queryParamMap.get('showImage') === 'true';

		this.store.pipe(select('products')).subscribe(products => {
			if (products) {
				this.displayCode = products.showProductCode;
			}
		});
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
		this.pageTitle = 'Product List: ' + message;
	}

	checkChanged(value: boolean): void {
		this.store.dispatch({
			type: 'TOGGLE_PRODUCT_CODE',
			payload: value
		});
	}
}
