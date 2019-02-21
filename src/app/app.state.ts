//do not user lazy-loaded
import { IUserState } from './user/state/user.reducer';

export interface IState {
	users: IUserState;
}
