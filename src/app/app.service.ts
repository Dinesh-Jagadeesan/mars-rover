import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RoverData } from './rover_dto/rover-data';

   

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  loadRover() {
    return this.httpClient.get<any[]>("/assets/rover.json")
    .pipe(
      catchError(this.handleError)
      );
  }

  onSubmit(url: string, queryParam: HttpParams) {
    return this.httpClient.get<RoverData>(url, {params: queryParam})
    .pipe(
      catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
