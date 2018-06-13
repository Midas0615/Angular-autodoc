import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User, UserService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  currentUser: User;
  isAuthenticated = false;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.userService.isAuthenticated.subscribe(
      (data) => {
        this.isAuthenticated = data
      }
    )
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/login');
  }
}
