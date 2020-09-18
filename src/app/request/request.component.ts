import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { Injectable } from "@angular/core";
import { BackendApiService } from "../backend-api.service";
import { GlobalDataService } from "../global-data.service";
import { MatTableDataSource } from "@angular/material";
import { MatSort } from "@angular/material/sort";

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
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"],
})
export class RequestComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  api: any;
  state: boolean;
  passedID: string;

  dataSource: MatTableDataSource<Object>;
  displayedColumns: string[] = [
    "name",
    "id",
    "user_email",
    "init_time",
    "mod_time",
    "status",
  ];
  constructor(
    private backendApi: BackendApiService,
    private globalData: GlobalDataService
  ) {
    this.api = backendApi;
  }

  ngOnInit() {
    let table = document.getElementById("dataTable");
    let loader = document.getElementById("loader");
    this.state = true;

    this.api.requests_get().subscribe((value) => {
      this.state = false;

      if (value["success"]) {
        console.log("im here", value["requests"]);
        this.dataSource = new MatTableDataSource(value["requests"]);
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case "name":
              return item["requestName"];
            case "user_email":
              return item["userEmail"];
            case "init_time":
              return item["requestInitTime"];
            case "mod_time":
              return item["requestModTime"]
            case "status":
              return item["requestStatus"]
            default:
              return item[property];
          }
        };
      } else {
        // TODO: think how should we show the error
        // console.log
        // snackbar
      }
    });
  }

  getDetail(row) {
    if(row["requestStatus"] == "pending"){
      alert("The result is still in pending.");
      window.location.reload();
    }
    this.globalData.requestName = row["requestName"];
    this.globalData.req_id = row["id"];
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
