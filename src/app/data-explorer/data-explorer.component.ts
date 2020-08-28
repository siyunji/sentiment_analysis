import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BackendApiService } from "../backend-api.service";
import { GlobalDataService } from "../global-data.service";

export interface WordsFreq {
  rank: string;
  positive: string;
  negative: string;
  neutral: string;
}

@Component({
  selector: "app-data-explorer",
  templateUrl: "./data-explorer.component.html",
  styleUrls: ["./data-explorer.component.css"],
})
export class DataExplorerComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  source: WordsFreq[] = [];
  dataSource: any;
  displayedColumns: string[] = ["word", "positive", "neutral", "negative"];

  constructor(
    private backendApi: BackendApiService,
    private globalData: GlobalDataService
  ) {}

  ngOnInit() {
    this.backendApi
      .send_request("wordsfreq", this.globalData.req_id)
      .subscribe((data) => {
        if (data["success"]) {
          let highestRank = 1;
          for (let value of data["scores"]) {
            if (parseInt(value["rank"]) > highestRank) {
              highestRank = parseInt(value["rank"]);
            }
          }

          let rankCount = 1;
          for (let i = 0; i < highestRank; i++) {
            let freq: WordsFreq = {
              rank: "",
              positive: "",
              negative: "",
              neutral: ""
            };
            for (let value of data["scores"]) {
              if (parseInt(value["rank"]) == rankCount) {
                freq.rank = value["rank"];
                if (value["label"] == "Positive") {
                  freq.positive = value["word"];
                }
                else if (value["label"] == "Negative") {
                  freq.negative = value["word"];
                }
                else if (value["label"] == "Neutral") {
                  freq.neutral = value["word"];
                }             
              }
            }
            rankCount++;
            this.source.push(freq);
          }
          
          this.dataSource = new MatTableDataSource(this.source);
          this.dataSource.sort = this.sort;
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case "word":
                return item["rank"];
              default:
                return item[property];
            }
          };
        }
      });
  }
}
