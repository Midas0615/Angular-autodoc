import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns = ['position', 'created_at', 'status', 'details'];
  dataSource = this.claimService.getClaims();
  constructor(
    private claimService: ClaimService
  ) { }

  ngOnInit() {
  }

}


export interface ClaimElement {
  position: string;
  created_at: string;
  status: string;
  details: string;
}
