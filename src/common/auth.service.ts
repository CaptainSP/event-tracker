import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  constructor(
    private cookies: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public loggedIn = false;

  login(jwtToken: string) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    if (jwtToken) {
      this.cookies.set('jwtToken', jwtToken, expires, '/');
      this.loggedIn = true;
    } else {
      this.cookies.delete('jwtToken', '/');
      this.loggedIn = false;
    }
  }

  init() {
    const token = this.cookies.get('jwtToken');
    if (token) {
      this.login(token);
    }
  }

  getToken() {
    return this.cookies.get('jwtToken');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
