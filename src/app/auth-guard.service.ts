import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  //   if(!this.authService.isLoggedIn()) {
  //     this.router.navigate(['/login']);
  //   }

  //   return this.authService.isLoggedIn();
  // }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return this.authService.isLoggedIn();
  }
}
