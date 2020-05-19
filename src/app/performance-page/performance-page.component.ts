import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatSidenav } from '@angular/material';

export interface DummyData {
  tool_name: string;
  positive: number;
  neutral: number;
  negative: number;

}

const DUMMY_DATA: DummyData[] = [
  {tool_name: 'Vader', positive: 0.8, neutral: 0.6, negative: 0.2},
  {tool_name: 'StanfordNLP', positive: 0.5, neutral: 0.4, negative: 0.6},
  {tool_name: 'Textblob', positive: 0.6, neutral: 0.7, negative: 0.9},
  {tool_name: 'SentiwordNet', positive: 0.4, neutral: 0.2, negative: 0.4},
];


@Component({
  selector: 'app-performance-page',
  templateUrl: './performance-page.component.html',
  styleUrls: ['./performance-page.component.css']
})

export class PerformancePageComponent implements OnInit {
  displayedColumns: string[] = ['tool_name', 'positive', 'neutral', 'negative'];
  // dataSource = DUMMY_DATA;
  dataSource = new MatTableDataSource(DUMMY_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  positiveMAX = 0;
  neutralMAX = 0;
  negativeMAX = 0;

  constructor() {

    this.positiveMAX = Math.max.apply(Math, DUMMY_DATA.map(function(o) { return o.positive; }));
    this.neutralMAX = Math.max.apply(Math, DUMMY_DATA.map(function(o) { return o.neutral; }));
    this.negativeMAX = Math.max.apply(Math, DUMMY_DATA.map(function(o) { return o.negative; }));
  }

  ngOnInit() {
   this.dataSource.sort = this.sort;
  
  }
}
