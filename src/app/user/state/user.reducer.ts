import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface IUserState {
	maskUserName: boolean;
}

const initialState: IUserState = {
	maskUserName: true
};

const getUserFeatureState = createFeatureSelector<IUserState>('users');

export const getMaskUserName = createSelector(
	getUserFeatureState,
	state => state.maskUserName
);

export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'MASK_USER_NAME':
			return {
				...state,
				maskUserName: action.payload
			};

		default:
			return state;
	}
}
