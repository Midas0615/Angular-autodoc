import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LprGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLPR = false;
    this.userService.currentUser.subscribe(data => {
      if (data.role === 'lpr') {
        isLPR = true
      }
    })

    if (isLPR) {
      return true
    } else {
      this.router.navigateByUrl('/main');
      return false
    }
  }
}
