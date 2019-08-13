import { IEvent } from './models/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get(`${this.apiUrl}/allEvents`).pipe(
      map(data => {
        return data;
      })
    );
  }

  addEvent(event: any) {
    return this.http.post(`${this.apiUrl}/addEvent`, event, { responseType: 'text' }).pipe(
      map(data => {
        return data;
      })
    );
  }
  deleteEvent(id) {
    const url = `${this.apiUrl}/deleteEvent/${id}`;
    console.log(url);
    return this.http.delete(url, { responseType: 'text' }).pipe(catchError(this.handleError));
  }

  updateEvent(event: any) {
    return this.http.put(`${this.apiUrl}/updateEvent`, event, { responseType: 'text' }).pipe(
      map(data => {
        return data;
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getEventsByDate(date: string) {}
  getEventsByLocation(location: string) {}
}
