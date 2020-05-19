import { Component, OnInit } from "@angular/core";
import { BackendApiService } from "../backend-api.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  constructor(private backendService: BackendApiService) {}

  ngOnInit() {
    const fileSelect = document.getElementById("fileSelect"),
      fileElem = document.getElementById("fileElem");

    fileSelect.addEventListener(
      "click",
      function (e) {
        if (fileElem) {
          fileElem.click();
        }
      },
      false
    );
  }
}
