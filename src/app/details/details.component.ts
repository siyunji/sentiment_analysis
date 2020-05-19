import { Component, OnInit, OnDestroy,ViewChild  } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSort } from '@angular/material/sort';

export interface DummyDetails {
  tweet: string;
  annotation: string;
  score: number;
  full_tweet: string;
  vader: any;
  sentiwordNet: any;
  Textblob: any;
  stanfordNLP: any;
  id:number;
}

const DUMMY_DATA: DummyDetails[] = [
  {
    tweet:
      "To increase #HPV vaccination rates, it is most effecitve to engage both the family and the children.",
    annotation: "negative",
    score: 0.43,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
    vader: { state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 1

  },
  {
    tweet: "To increase #HPV vaccination rates",
    annotation: "positive",
    score: 0.23,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
      vader: {state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 2
  },
  {
    tweet:
      "To increase #HPV vaccination rates, it is most effecitve to engage both the family and the children.",
    annotation: "negative",
    score: 0.43,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
      vader: {state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 3
  },
  {
    tweet: "To increase #HPV vaccination rates",
    annotation: "positive",
    score: 0.53,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
      vader: {state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 4
  },
  {
    tweet:
      "To increase #HPV vaccination rates, it is most effecitve to engage both the family and the children.",
    annotation: "negative",
    score: 0.37,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
      vader: {state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 5
  },
  {
    tweet: "To increase #HPV vaccination rates",
    annotation: "positive",
    score: 0.32,
    full_tweet:
      " ' To increase #HPV vaccination rates, it is most effecitve to engage both the family and the chlinician.'This is so awfull",
      vader: {state: "negative", score:0.33},
    sentiwordNet: {state: "positive", score:0.33},
    Textblob: {state: "neutral", score:0.33},
    stanfordNLP: {state: "negative", score:0.33},
    id: 6
  }
];

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  detail = [];

  constructor() {
    this.detail = DUMMY_DATA;
  }

  ngOnInit() {
    console.log('details component oninit...');
  }

  ngOnDestroy() {
    console.log('details component onDestroy...');
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
