import { Component, OnInit} from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  requestName: string;
  constructor(private globalData: GlobalDataService) {
    this.requestName = this.globalData.requestName;
  }

  ngOnInit() {
  }

}
