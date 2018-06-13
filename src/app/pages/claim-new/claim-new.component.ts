import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaimService, UserService } from '../../core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-claim-new',
  templateUrl: './claim-new.component.html',
  styleUrls: ['./claim-new.component.css']
})
export class ClaimNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  role = '';

  constructor(
    private fb: FormBuilder,
    private claimService: ClaimService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (data) => {
        this.role = data.role
        if (this.role === 'student') {
          this.secondFormGroup = this.fb.group({
            term: ['', Validators.required],
            start_date: ['', Validators.required],
            finish_date: ['', Validators.required],
          });
          this.thirdFormGroup = this.fb.group({
            goal: ['', Validators.required],
            financial_source: ['', Validators.required],
            transport: ['', Validators.required],
          });
        } else {
          this.secondFormGroup = this.fb.group({
            term: ['', Validators.required],
            term_without_transfer: ['', Validators.required],
            start_date: ['', Validators.required],
            finish_date: ['', Validators.required],
          });
          this.thirdFormGroup = this.fb.group({
            goal: ['', Validators.required],
            financial_source: ['', Validators.required],
            payer_organization: ['', Validators.required],
            reason: ['', Validators.required]
          });
        }
      }
    )
    this.firstFormGroup = this.fb.group({
      dst_country: ['', Validators.required],
      dst_city: ['', Validators.required],
      dst_organization: ['', Validators.required],
    });
  }

  createClaim() {
    const claimDetails = Object.assign(
      this.firstFormGroup.value,
      this.secondFormGroup.value,
      this.thirdFormGroup.value
    );
    console.log(claimDetails.start_date)
    claimDetails.start_date = claimDetails.start_date._d
    claimDetails.finish_date = claimDetails.finish_date._d
    this.claimService.createClaim(claimDetails).subscribe(
      () => {
        this.router.navigateByUrl('/main')
        this.showSuccess()
      }
    )
  }

  showSuccess() {
    this.toastr.success('Новая заявка создана');
  }

}
