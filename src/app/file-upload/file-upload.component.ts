import { Component, OnInit, HostListener } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  fileElem: any;
  project_name: string;
  user_email: string;

  fileSubmit = new FormGroup({
    fileName: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    requestName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
  });

  constructor(private backendService: BackendApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    const fileSelect = document.getElementById('fileSelect');
    this.fileElem = document.getElementById('fileElem');
    let self = this;

    fileSelect.addEventListener(
      'click',
      function (e) {
        if (self.fileElem) {
          self.fileElem.click();
        }
      },
      false
    );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileSubmit.patchValue({
        file,
      });
    }
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  sendFile() {
    this.backendService.requests_post(this.toFormData(this.fileSubmit.value)).subscribe(
      (res) => {
        console.log({ res });
        if (res['success']) {
          this.snackBar.open('File Upload Success.', 'OK');
        }
      },
      (err) => {
        console.log(err);
      }
    );

    //   this.backendService
    //     .requests_post(this.toFormData(this.fileSubmit.value))
    //     .subscribe((data) => {
    //       if (data["success"]) {
    //         console.log("success");
    //         this.snackBar.open("File Upload Success.", "OK");
    //         // * tell user the request has been accepted, and let them know we will email them after the analysis job is done
    //         // * option 1: new page
    //         // * option 2: dialog window
    //         // TODO: https://material.angular.io/components/dialog/overview
    //       } else {
    //         console.log("failed");
    //         if (data.hasOwnProperty("msg")) {
    //           this.snackBar.open(
    //             "Faile upload failed. Error: " + data["msg"],
    //             "OK"
    //           );
    //         } else {
    //           this.snackBar.open(
    //             "Unknown Error. Please try it again later." + data["msg"],
    //             "OK"
    //           );
    //         }
    //       }
    //     });
  }
}
