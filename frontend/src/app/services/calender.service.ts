import { Injectable } from '@angular/core';
import { Calender} from '../Interfaces/calender';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';


const baseUrl = 'http://localhost:3000/Calender';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  // calender : Calender;

  constructor(private http: HttpClient) { }

  getCalender(): Observable<Calender[]> {
    return this.http.get<Calender[]>(`${baseUrl}`);
    // .pipe(
    //   tap(_ =>this.log()

    //   )
    // )
  }
}


// getHeroes(): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
//     .pipe(
//       tap(_ => this.log('fetched heroes')),
//       catchError(this.handleError<Hero[]>('getHeroes', []))
//     );
// }
