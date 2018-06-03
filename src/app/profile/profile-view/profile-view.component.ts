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
  user = {
    last_name: 'Иванов',
    first_name: 'Петр',
    patronymic: 'Иванович',
    structural_unit: 'ИКТИБ',
    group: 'КТсо3-5',
    course: '3',
    email: 'p.ivanov@example.com',
    passport: '3459 945998'
  }

  currentUser: User;
  userProfile: Profile;

  constructor(
    private userService: UserService,
    // private profileService: ProfileService
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.getProfile();
  }


  getProfile() {
    this.http.get<Profile>('http://localhost:5000/api/v1/users/' + this.currentUser.id).subscribe(
      (data: Profile) => this.userProfile = data
    )
  }


}
