import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimService, UserService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import {MatSort, MatTableDataSource} from '@angular/material';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns = ['summary', 'created_at', 'status'];
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
        const dataForTable = [];
        data.forEach(el => {
          const start_date = formatDate(el.start_date, 'dd.MM', 'en-US')
          const finish_date = formatDate(el.finish_date, 'dd.MM', 'en-US')
          dataForTable.push({
            id: el.id,
            summary: `${el.destination} ${start_date} - ${finish_date}`,
            created_at: el.created_at,
            status: el.status
          })
        })
        this.dataSource = new MatTableDataSource(dataForTable);
        this.dataSource.sort = this.sort;
      }
    );
  }

}


export interface ClaimElement {
  id: string;
  destination: string;
  start_date: string;
  finish_date: Date;
  created_at: Date;
  status: string;
}
