import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  data: any;
  apiEndPoint = environment.urlendpoint;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  public requests_get() {
     const serverurl = this.apiEndPoint;
     return this.httpClient.get(serverurl).pipe(catchError(this.handleError));
  }

  // TODO: check the file loading func
  public requests_post(formData) {
    const serverurl = this.apiEndPoint;
    return this.httpClient
      .post(serverurl, formData);
    }

  public send_request(request_name: string, id: string) {
    const serverurl = this.apiEndPoint + request_name;
    console.log(serverurl);
    let params = new HttpParams().set('reqid', id);
    return this.httpClient
      .get(serverurl, {params}).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('Error: ' + error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
    
    //this.snackBar.open('Error: ' + error.error.message, "I will try it again later");
  }

}
