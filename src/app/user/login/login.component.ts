import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state/user.reducer';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	errorMessage: string;

	maskUserName: boolean;

	constructor(
		private authService: AuthService,
		private router: Router,
		private store: Store<any>
	) {}
	ngOnInit() {
		// TODO: Unsubscribe
		this.store
			.pipe(select(fromUser.getMaskUserName))
			.subscribe(maskUserName => (this.maskUserName = maskUserName));
	}

	login(loginForm: NgForm) {
		if (loginForm && loginForm.valid) {
			const userName = loginForm.form.value.userName;
			const password = loginForm.form.value.password;
			this.authService.login(userName, password);

			// Navigate to the Product List page after log in.
			if (this.authService.redirectUrl) {
				this.router.navigateByUrl(this.authService.redirectUrl);
			} else {
				this.router.navigate(['/products']);
			}
		} else {
			this.errorMessage = 'Please enter a user name and password.';
		}
	}

	checkChanged(value: boolean): void {
		this.store.dispatch({
			type: 'MASK_USER_NAME',
			payload: value
		});
	}
}
