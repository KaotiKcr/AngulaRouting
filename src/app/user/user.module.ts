import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { reducer } from './state/user.reducer';

@NgModule({
	imports: [
		UserRoutingModule,
		SharedModule,
		StoreModule.forFeature('users', reducer)
	],
	declarations: [LoginComponent]
})
export class UserModule {}
