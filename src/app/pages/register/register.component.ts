import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core';
import { Router } from '@angular/router';
import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitting = false;

  roles = [
    { value: 'student', viewValue: 'Студент'},
    { value: 'collaborator', viewValue: 'Сотрудник'}
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      'email': ['', Validators.required],
      'passwords': this.fb.group({
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required]
      }, { validator: PasswordValidation.MatchPassword })
    });
  }

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('passwords').get('password'); }

  get confirmPassword() { return this.registerForm.get('passwords').get('confirmPassword'); }

  get requiredEmailError() { return this.email.hasError('required') && this.email.touched }

  get requiredPasswordError() { return this.password.hasError('required') && this.password.touched }

  get requiredConfirmPasswordError() {
    return this.confirmPassword.hasError('required') && this.confirmPassword.touched
  }

  get matchPasswordsError() { return this.confirmPassword.hasError('MatchPassword'); }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = {
      'email': this.registerForm.controls.email.value,
      'password': this.registerForm['controls'].passwords['controls'].confirmPassword.value,
      'role': this.registerForm.controls.role.value
    };
    this.userService
    .register(credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.isSubmitting = false;
      }
    );
  }

}
