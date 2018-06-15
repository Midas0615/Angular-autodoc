import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, Errors } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  errors: Errors = {errors: {}};

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  get requiredPasswordError() { return (this.password.hasError('required') && this.password.touched) || !this.password.pristine }

  get requiredEmailError() { return (this.email.hasError('required') && this.email.touched) || !this.email.pristine }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
    this.userService
    .login(credentials)
    .subscribe(
      data => {
        this.router.navigateByUrl('/main')
      },
      error => {
        this.errors = error.error;
      }
    );
  }
}
