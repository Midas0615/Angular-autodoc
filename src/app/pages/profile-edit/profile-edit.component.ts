import { Component, OnInit } from '@angular/core';
import { User, Profile, UserService, ProfileService } from '../../core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  currentUser: User;
  isProfileLoaded = false;
  profileForm: FormGroup;

  constructor(
    private userService: UserService,
    // private http: HttpClient
    private profileService: ProfileService,
    private router: Router,
  ) {
    this.profileForm = new FormGroup({
      last_name: new FormControl(),
      first_name: new FormControl(),
      patronymic: new FormControl(),
      structural_unit: new FormControl(),
      course: new FormControl(),
      group: new FormControl(),
      email: new FormControl(),
      passport_series: new FormControl(),
      passport_number: new FormControl()
    })
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.profileService.getProfile(this.currentUser.id).subscribe(
      (data: Profile) => {
        this.isProfileLoaded = true;
        this.profileForm.controls.last_name.setValue(data.last_name);
        this.profileForm.controls.first_name.setValue(data.first_name);
        this.profileForm.controls.patronymic.setValue(data.patronymic);
        this.profileForm.controls.structural_unit.setValue(data.structural_unit);
        this.profileForm.controls.course.setValue(data.course);
        this.profileForm.controls.group.setValue(data.group);
        this.profileForm.controls.email.setValue(data.email);
        this.profileForm.controls.passport_series.setValue(data.passport_series);
        this.profileForm.controls.passport_number.setValue(data.passport_number);
      }
    );
  }

  submitForm() {
    this.profileService.setProfile(this.currentUser.id, this.profileForm.value).subscribe(
      data => this.router.navigateByUrl('/profile/view')
    );
  }

}
