import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  data: any;
  apiEndPoint = 'https://salt-node-api.herokuapp.com/requests/';

  constructor(private httpClient: HttpClient) {}

  public requests_get() {
     const serverurl = this.apiEndPoint;
     return this.httpClient.get(serverurl);
  }

  public requests_post(file_name, request_name, user_email) {
    const serverurl = this.apiEndPoint;
    return this.httpClient
      .post(serverurl, {
        file: file_name,
        requestName: request_name,
        userEmail: user_email,
      });
    }

  public send_request(request_name: string, id: string) {
    const serverurl = this.apiEndPoint + request_name;
    let params = new HttpParams().set('reqid', id);
    return this.httpClient
      .get(serverurl, {params}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
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
  };

}
