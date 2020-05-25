import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BackendApiService } from '../backend-api.service';
import { GlobalDataService } from '../global-data.service';

export interface Details {
  tweet: string;
  annotation: string;
  score: number;
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

  constructor(private backendApi: BackendApiService, private globalData: GlobalDataService) {
  }

  ngOnInit() {
    this.backendApi.send_request("tweets", this.globalData.req_id).subscribe(
      (data) => {
        if (data["success"]) {
          let count = 0;
          for (let item in data["tweets"]) {
            if (count > 50) {
              break;
            }
            count++;
            let tweet: Details = {
              tweet : String(data["tweets"][item]["tweet"]),
              annotation : String(data["tweets"][item]["annotation"]),
              score : data["tweets"][item]["kappa"],
              vader : String(data["tweets"][item]["vader"]),
              textblob : String(data["tweets"][item]["textblob"]),
              stanfordNLP : String(data["tweets"][item]["Stanford"]),
              id : data["tweets"][item]["id"],
              sentences : data["tweets"][item]["sentences"]
            };
            console.log(tweet);
            this.detail.push(tweet);
          }
        }
      }
    );
  }

  sortScoreDesc() {
    this.detail.sort((a, b) => a.score - b.score);
  }
  sortScoreAsc(){
    this.detail.sort((a, b) => b.score - a.score);
  }
  sortIDAsc(){
    this.detail.sort((a, b) => a.id - b.id);
  }
}
