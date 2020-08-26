import { Injectable } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

const baseUrl = 'http://localhost:3000/Documents';

@Injectable({
  providedIn: 'root'
})

export class DocumentServiceService {

  document: Documents;

  constructor(private http: HttpClient) { }

  getDocuments(id): Observable<any> {
    // console.log(`${baseUrl}/${id}`);
    return this.http.get<Documents>(`${baseUrl}/${id}`);
    // const path = this.http.get(`${baseUrl}/${id}`);
    // return this.http.get(`${path}`,  {responseType: 'text'});
  }

}
