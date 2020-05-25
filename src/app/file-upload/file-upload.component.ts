import { Component, OnInit } from "@angular/core";
import { BackendApiService } from "../backend-api.service";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  fileElem: any;
  project_name: string;
  user_email: string;

  constructor(private backendService: BackendApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    const fileSelect = document.getElementById("fileSelect");

    this.fileElem = document.getElementById("fileElem");
    let self = this;

    fileSelect.addEventListener(
      "click",
      function (e) {
        if (self.fileElem) {
          self.fileElem.click();
        }
      },
      false
    );
  }

  sendFile() {
    if (this.fileElem && this.project_name && this.user_email) {
      this.backendService.requests_post(this.fileElem, this.project_name, this.user_email).subscribe(
        (data) => {
          if (data['success']) {
            this.snackBar.open("File Upload Success.", "OK");
          }
          else {
            if (data.hasOwnProperty("msg")) {
              this.snackBar.open("Faile upload failed. Error: " + data["msg"], "OK");
            }
            else {
              this.snackBar.open("Unknown Error. Please try it again later." + data["msg"], "OK");
            }
          }
        }
      );
    }
  }
}
