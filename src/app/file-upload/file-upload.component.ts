import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { ComponentType } from '@angular/cdk/portal';
import { FailDialogComponent } from '../fail-dialog/fail-dialog.component';

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
  fileStatus: string;
  fileSubmitting: boolean;
  htmlstring:string;

  fileSubmit = new FormGroup({
    fileName: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    requestName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
  });

  constructor(private backendService: BackendApiService, public dialog: MatDialog) {
    this.fileStatus = "Choose File";
    this.fileSubmitting = false;
  }

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

  async onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileSubmit.patchValue({
        file,
      });
      let file_name = this.fileSubmit.value["file"].name;
      this.fileStatus = file_name;
      this.fileSubmitting = true;
      await this.delay(2000);
      document.getElementById("fileSelect").style.backgroundColor = "#28a745";
      document.getElementById("fileSelect").style.color = "#ffffff";
      this.fileSubmitting = false;
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
    this.backendService.requests_post(this.toFormData(this.fileSubmit.value))
    .subscribe(
      (res) => {
        console.log({ res });
        if (res['success']) {
          this.openDialog(SuccessDialogComponent);
          window.location.reload();
        }
        else {
          this.openDialog(FailDialogComponent);
          window.location.reload();
        }
      },
      (err) => {
        this.openDialog(FailDialogComponent);
        window.location.reload();
      }
    );
  }

  openDialog(dialog_component: ComponentType<unknown>) {
    this.dialog.open(dialog_component);
  }

  delay(ms) {
    return new Promise( result => setTimeout(result, ms));
  }
}
