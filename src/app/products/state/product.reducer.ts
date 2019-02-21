import { IProduct } from '../product';
import * as fromRoot from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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

export function reducer(state = initialState, action): IProductState {
	switch (action.type) {
		case 'TOGGLE_PRODUCT_CODE': {
			return {
				...state,
				showProductCode: action.payload
			};
		}
		default:
			return state;
	}
}
