import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimService, UserService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns = ['position', 'created_at', 'status'];
  dataSource = undefined;
  role = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private claimService: ClaimService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.role = user.role
    });
    this.claimService.getClaims().subscribe(
      (data: ClaimElement[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

}


export interface ClaimElement {
  position: string;
  created_at: string;
  status: string;
  details: string;
}
