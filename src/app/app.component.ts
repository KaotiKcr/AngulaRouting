import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'KaotiK';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }


  constructor(
    private messageService:MessageService, 
    private authService: AuthService, 
    private router: Router) 
  {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart){
        this.loading = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel ||routerEvent instanceof NavigationError ){
        this.loading = false;
      }

    });
  }

  displayMessages() {
    this.router.navigate([{outlets: {popup: ['messages']} }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages() {
    this.router.navigate([{outlets: {popup: null} }]);
    this.messageService.isDisplayed = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
