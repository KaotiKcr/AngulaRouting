import { Component, OnInit } from '@angular/core';
import { IProduct, IProductResolved } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	errorMessage = '';
	product: IProduct | undefined;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		const resolvedData: IProductResolved = this.route.snapshot.data[
			'resolvedData'
		];
		this.errorMessage = resolvedData.error;
		this.onProductRetrieved(resolvedData.product);
	}
	onProductRetrieved(product: IProduct): any {
		this.product = product;

		if (this.product) {
			this.pageTitle = `Product Detail: ${this.product.productName}`;
		}
	}
}
