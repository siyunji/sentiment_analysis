import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatSidenav } from "@angular/material";
import { BackendApiService } from '../backend-api.service';
import { GlobalDataService } from '../global-data.service';
import { disableDebugTools } from '@angular/platform-browser';

export interface Performance {
  tool_name: string;
  positive: number;
  neutral: number;
  negative: number;
  overall: number;
}

@Component({
  selector: "app-performance-page",
  templateUrl: "./performance-page.component.html",
  styleUrls: ["./performance-page.component.css"],
})
export class PerformancePageComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ["tool_name", "positive", "neutral", "negative", "overall"];
  source: Performance[] = [];
  dataSource: any;

  positiveMAX = 0;
  neutralMAX = 0;
  negativeMAX = 0;
  overallMAX = 0;

  constructor(private backendApi: BackendApiService, private globalData: GlobalDataService) {
  }
  
  ngOnInit() {
    this.backendApi.send_request("performance", this.globalData.req_id).subscribe(
      (data) => {
        if (data["success"]) {
          for (let value of data["scores"]) {
            let index = this.source.findIndex((element) => element.tool_name == value["tool"])
            if (index != -1) {
              this.source[index][value["label"].toLowerCase()] = value["score"];
            }
            else {
              this.source.push({
                  tool_name: value["tool"],
                  negative: 0,
                  neutral: 0,
                  positive: 0,
                  overall: 0
                }
              );
            }
          }
        }
        else {
          console.log("error");
        }
        this.dataSource = new MatTableDataSource(this.source);
        this.calcMax();
        this.dataSource.sort = this.sort;
      }
    );
  }

  calcMax() {
    this.positiveMAX = Math.max.apply(
      Math,
      this.source.map(function (o) {
        return o.positive;
      })
    );
    this.neutralMAX = Math.max.apply(
      Math,
      this.source.map(function (o) {
        return o.neutral;
      })
    );
    this.negativeMAX = Math.max.apply(
      Math,
      this.source.map(function (o) {
        return o.negative;
      })
    );
    this.overallMAX = Math.max.apply(
      Math,
      this.source.map(function (o) {
        return o.overall;
      })
    );
  }
}
