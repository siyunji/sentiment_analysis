import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-explorer',
  templateUrl: './data-explorer.component.html',
  styleUrls: ['./data-explorer.component.css']
})
export class DataExplorerComponent implements OnInit {
  public negative: number = 20;
  public neutral: number = 50;
  public positive: number = 30;
  public word_count: number = 34484

  constructor() { }

  ngOnInit() {
  }

}
