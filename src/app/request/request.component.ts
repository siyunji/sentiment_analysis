import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { BackendApiService } from '../backend-api.service';

export interface Request {
  id: number;
  requestInitTime: string;
  requestModTime: string;
  requestName: string;
  requestStatus: string;
  userEmail: string;
}

// const REQUEST_DATA: Request[] = [
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" },
//   { name: "REQUEST2", id: "REQUEST ID", file_name: "TEST FILE", date: "12 Sep 2019", status: "Fail" }
// ];

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
  requests: Request[];
  state: boolean;

  dataSource:any;
  displayedColumns: string[] = ['name', 'id', 'user_email', 'init_time', 'mod_time', 'status', 'detail'];
  constructor(backendApi : BackendApiService) {
    this.api = backendApi;
  }

  ngOnInit() {
    let table = document.getElementById("dataTable");
    let loader = document.getElementById("loader");
    this.state = true;
    //table.style.display = "none";
    //loader.style.display = "block";

    this.api.requests_get().subscribe((value) => {
      this.state = false;
      //loader.style.display = "none";
      //table.style.display = "block";

      if (value['success']) {
        this.requests = value['requests'];
        console.log(this.requests);
        this.dataSource = this.requests;
      } else {
        // TODO: think how should we show the error
        // console.log
        // snackbar
      }
    });
  }

    format(){
      
    }

}
