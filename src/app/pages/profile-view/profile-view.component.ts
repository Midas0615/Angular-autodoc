import { Component, OnInit } from '@angular/core';
import { UserService, User, Profile, ProfileService, ApiService } from '../../core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  currentUser: User;
  userProfile: Profile;

  constructor(
    private userService: UserService,
    // private profileService: ProfileService
    // private http: HttpClient
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.getProfile();
  }


  getProfile() {
    this.apiService.get('/users/' + this.currentUser.id).subscribe(
      (data: Profile) => this.userProfile = data
    )
  }


}
