import { Injectable } from '@angular/core';
import {Events} from '../Interfaces/events';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

const baseURL = 'http://localhost:3000/Events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get<Event>(`${baseURL}`);
  }
}
