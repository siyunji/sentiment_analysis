import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BackendApiService } from '../backend-api.service';
import { GlobalDataService } from '../global-data.service';
import { PageEvent } from '@angular/material/paginator';

export interface Details {
  tweet: string;
  annotation: string;
  score: string;
  vader: string;
  textblob: string;
  stanfordNLP: string;
  id: number;
  sentences: Details[];
}

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit{
  panelOpenState = false;
  detail: Details[] = [];
  pageLength: string;
  currentPage: string = '1';
  pageSize: string = '10';

  constructor(private backendApi: BackendApiService, private globalData: GlobalDataService) {
  }

  ngOnInit() {
    this.refreshList("kappa", "1", "asc", this.pageSize);
  }

  onPageChange(pageEvent: PageEvent) {
    let index =  pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize.toString();
    this.refreshList("kappa", index.toString(), "asc", this.pageSize);
  }

  refreshList(sortby: string, page_num: string, order: string, page_size: string) {
    this.backendApi.send_tweets_request(this.globalData.req_id, sortby, page_num, order, page_size).subscribe(
      (data) => {
        if (data["success"]) {
          this.currentPage = page_num;
          this.detail = [];
          this.pageLength = data["totalPages"];
          let count = 0;
          for (let item in data["tweets"]) {
            if (count > 50) {
              break;
            }
            count++;
            let s = parseFloat(data["tweets"][item]["kappa"]);
            let tweet: Details = {
              tweet : String(data["tweets"][item]["tweet"]),
              annotation : String(data["tweets"][item]["annotation"]),
              score : s.toPrecision(2),
              vader : String(data["tweets"][item]["vader"]),
              textblob : String(data["tweets"][item]["textblob"]),
              stanfordNLP : String(data["tweets"][item]["stanford"]),
              id : data["tweets"][item]["id"],
              sentences : data["tweets"][item]["sentences"]
            };
            this.detail.push(tweet);
          }
        }
      }
    );
  }

  sortScoreDesc() {
    //this.detail.sort((a, b) => a.score - b.score);
    this.refreshList("kappa", this.currentPage, "dsc", this.pageSize);
  }

  sortScoreAsc() {
    // this.detail.sort((a, b) => b.score - a.score);
    this.refreshList("kappa", this.currentPage, "asc", this.pageSize);
  }

  sortIDAsc() {
    //this.detail.sort((a, b) => a.id - b.id);
    this.refreshList("insert_id", this.currentPage, "asc", this.pageSize);
  }

  sortIDDesc() {
    this.refreshList("insert_id", this.currentPage, "dsc", this.pageSize);
  }
}
