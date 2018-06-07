import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaimService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-new',
  templateUrl: './claim-new.component.html',
  styleUrls: ['./claim-new.component.css']
})
export class ClaimNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private claimService: ClaimService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      dstCountry: ['', Validators.required],
      dstCity: ['', Validators.required],
      dstOrganization: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      term: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      goal: ['', Validators.required],
      financialSource: ['', Validators.required],
      transport: ['', Validators.required],
      headOfDepartment: ['', Validators.required]
    });
  }

  createClaim() {
    const claimDetails = Object.assign(
      this.firstFormGroup.value,
      this.secondFormGroup.value,
      this.thirdFormGroup.value
    );

    claimDetails.startDate = claimDetails.startDate._d.getTime() / 1000;
    claimDetails.finishDate = claimDetails.finishDate._d.getTime() / 1000;
    this.claimService.createClaim(claimDetails).subscribe(
      () => this.router.navigateByUrl('/main')
    )
  }

}
