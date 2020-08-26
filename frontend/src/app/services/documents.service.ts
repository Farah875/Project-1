import { Component, Injectable, NgModule } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import { HttpClientModule } from '@angular/common/http';
import { templateJitUrl, ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import { AppRoutingModule } from '../app-routing.module';

const baseUrl = 'http://localhost:3000/Documents';


// @Component({
//   selector: 'app-student-form',
//   templateUrl: '../about/about.component.html',
//   styleUrls: ['../about/about.component.scss']
// })

@Injectable({
  providedIn: 'root'
})

// @NgModule({
//   imports: [FooterComponent, HeaderComponent, AppRoutingModule],
//    exports: [DocumentsService],
//    declarations: [DocumentsService],
//    providers: [],
// })

// tslint:disable-next-line: component-class-suffix
export class DocumentsService {

  document: Documents;

  constructor(private http: HttpClient) { }

  getDocumnet(id): Observable<any> {
   return  this.http.get(`${baseUrl}/${id}`);
    // const path = this.http.get(`${baseUrl}/${id}`);
    // return this.http.get(`${path}`,  {responseType: 'text'});
  }
}
