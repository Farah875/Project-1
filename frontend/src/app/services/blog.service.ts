import { Injectable } from '@angular/core';
import {Blog} from '../Interfaces/blog';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

const baseURLAll = 'http://localhost:3000/Blog';
const baseURLOne = 'http://localhost:3000/OneBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog: Blog;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Blog>(`${baseURLAll}`);
  }

  getOneBlog(id): Observable<any> {
    console.log('id from service:' + id);
    return this.http.get<Blog>(`${baseURLOne}/${id}`);
  }
}
