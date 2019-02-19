import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { stat } from 'fs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.checkLoggedIn(state.url);
	}

	checkLoggedIn(url: string): boolean {
		if (this.authService.isLoggedIn) {
			return true;
		}
		this.authService.redirectUrl = url;
		this.router.navigate(['/login']);
		return false;
	}
}
