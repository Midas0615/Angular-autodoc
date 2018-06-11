import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, ApiService, Errors } from '../../core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  errors: Errors = {errors: {}};

  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
    // this.userService
    // .login(credentials)
    // .subscribe(
    //   data => {
    //     console.log(data)
    //     this.router.navigateByUrl('/main')
    //   },
    //   err => {
    //     console.log(err)
    //     this.isSubmitting = false;
    //   }
    // );
    this.apiService.post('/users/login', credentials).subscribe(
      data => console.log(data),
      error => this.errors = error.error
    )
  }
}
