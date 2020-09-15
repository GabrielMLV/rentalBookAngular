import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RentalbookService {

  URL = "http://localhost:8080/v1/api"; //DEV
  //ULR = "http://localhost:8080/v1/api"; //PROD

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.URL + '/book').pipe(catchError(this.handleError));
  }

  getRentalBooks() {
    return this.httpClient.get(this.URL + '/rentalBook').pipe(catchError(this.handleError));
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
