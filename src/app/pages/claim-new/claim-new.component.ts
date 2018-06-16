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
            start_date: ['', Validators.required],
            finish_date: ['', Validators.required],
          });
        } else {
          this.secondFormGroup = this.fb.group({
            term_without_transfer: ['', Validators.required],
            start_date: ['', Validators.required],
            finish_date: ['', Validators.required],
          });
        }
      }
    )
    this.firstFormGroup = this.fb.group({
      dst_country: ['', Validators.required],
      dst_city: ['', Validators.required],
      dst_organization: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      goal: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  get dst_country() { return this.firstFormGroup.get('dst_country'); }
  get dst_city() { return this.firstFormGroup.get('dst_city'); }
  get dst_organization() { return this.firstFormGroup.get('dst_organization'); }
  get term_without_transfer() { return this.secondFormGroup.get('term_without_transfer'); }
  get start_date() { return this.secondFormGroup.get('start_date'); }
  get finish_date() { return this.secondFormGroup.get('finish_date'); }
  get goal() { return this.thirdFormGroup.get('goal'); }
  get reason() { return this.thirdFormGroup.get('reason'); }

  get requiredDstCountryError() { return this.dst_country.hasError('required') && this.dst_country.touched }
  get requiredDstCityError() { return this.dst_city.hasError('required') && this.dst_city.touched }
  get requiredDstOrganizationError() { return this.dst_organization.hasError('required') && this.dst_organization.touched }
  get requiredTermWithoutTransferError() { return this.term_without_transfer.hasError('required') && this.term_without_transfer.touched }
  get requiredStartDateError() { return this.start_date.hasError('required') && this.start_date.touched }
  get requiredFinishDateError() { return this.finish_date.hasError('required') && this.finish_date.touched }
  get requiredGoalError() { return this.goal.hasError('required') && this.goal.touched }
  get requiredReasonError() { return this.reason.hasError('required') && this.reason.touched }


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
