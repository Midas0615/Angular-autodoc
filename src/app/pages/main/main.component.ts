import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns = ['position', 'date', 'status', 'details'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
}

export interface ClaimElement {
  position: number;
  date: string;
  status: string;
  details: string;
}

const ELEMENT_DATA: ClaimElement[] = [
  {position: 1, date: '25.04.2016', status: 'Не рассмотрена', details: '/claim/1'},
  {position: 2, date: '28.04.2016', status: 'Рассмотрена', details: '/claim/2'},
  {position: 3, date: '01.05.2016', status: 'Принята', details: '/claim/3'},
];


