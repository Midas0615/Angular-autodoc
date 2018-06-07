import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
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

}
