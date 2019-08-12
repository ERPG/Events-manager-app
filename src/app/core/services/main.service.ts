import { IEvent } from './models/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get(`http://localhost:3000/api/allEvents`).pipe(
      map(data => {
        console.log('DATAAAA');
        console.log(data);
        return data;
      })
    );
  }

  addEvent(event: any) {}
  deleteEvent(event: any) {}
  updateEvent(event: any) {}
  getEventsByDate(date: string) {}
  getEventsByLocation(location: string) {}
}
