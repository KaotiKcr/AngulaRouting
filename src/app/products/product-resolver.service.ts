import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

import { IProductResolved } from "./product";
import { ProductService } from "./product.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<IProductResolved> {
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductResolved> {
        const id = route.paramMap.get('id');
        if (isNaN(+id)) {
            const message = `Product id was not a number: ${id}`;
            console.log(message);
            return of({ product: null, error: message });
        }
        return this.productService.getProduct(+id).pipe(
            map(product => ({ product: product })),
            catchError(error => {
                const message = `Retrieval error: ${error}`;
                console.log(message);
                return of({ product: null, error: message });
            })
        );
    }
}