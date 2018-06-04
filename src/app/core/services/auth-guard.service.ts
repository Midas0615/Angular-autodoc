import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';
import { take } from 'rxjs/operators/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isAuthenticated = false
    this.userService.isAuthenticated.subscribe(
      (data) => {
        isAuthenticated = data
      }
    )
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
