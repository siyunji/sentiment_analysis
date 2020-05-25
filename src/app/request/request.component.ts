import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { Injectable } from "@angular/core";
import { BackendApiService } from '../backend-api.service';
import { GlobalDataService } from '../global-data.service';

export interface Request {
  id: number;
  requestInitTime: string;
  requestModTime: string;
  requestName: string;
  requestStatus: string;
  userEmail: string;
}

@Injectable({
  providedIn: "root",
})
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  api: any;
  state: boolean;
  passedID: string;

  dataSource: Request[];
  displayedColumns: string[] = ['name', 'id', 'user_email', 'init_time', 'mod_time', 'status', 'detail'];
  constructor(private backendApi : BackendApiService, private globalData: GlobalDataService) {
    this.api = backendApi;
  }

  ngOnInit() {
    let table = document.getElementById("dataTable");
    let loader = document.getElementById("loader");
    this.state = true;

    this.api.requests_get().subscribe((value) => {
      this.state = false;

      if (value['success']) {
        this.dataSource = value['requests'];
      } else {
        // TODO: think how should we show the error
        // console.log
        // snackbar
      }
    });
  }

  getDetail(row) {
    this.globalData.requestName = row["requestName"];
    this.globalData.req_id = row["id"];
  }
}
