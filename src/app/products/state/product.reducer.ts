import { IProduct } from '../product';
import * as fromRoot from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActionTypes, ProductActions } from './product.action';

export interface IState extends fromRoot.IState {
	products: IProductState;
}

export interface IProductState {
	showProductCode: boolean;
	products: IProduct[];
}

const initialState: IProductState = {
	showProductCode: true,
	products: []
};

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
	getProductFeatureState,
	state => state.showProductCode
);

export const getProducts = createSelector(
	getProductFeatureState,
	state => state.products
);

export function reducer(
	state = initialState,
	action: ProductActions
): IProductState {
	switch (action.type) {
		case ProductActionTypes.ToggleProductCode: {
			return {
				...state,
				showProductCode: action.payload
			};
		}
		default:
			return state;
	}
}
