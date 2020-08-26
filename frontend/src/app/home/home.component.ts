import { Component, OnInit } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import {DocumentServiceService} from '../services/document-service.service';
import {Events} from '../Interfaces/events';
import {EventService} from '../services/event.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  document: Documents;
  events: Events[] = [];

  constructor( private documentService: DocumentServiceService,
               private service: EventService) { }

  ngOnInit(): void {
    this.getDocument();
    this.getAllEvents();
  }

  getDocument(): void {
    // console.log('hello ' + this.documentService.getDocuments(0));
    this.documentService.getDocuments(0)
    .subscribe(res => this.document = res);
    // .subscribe(document => this.document = document.text());
  }

  getAllEvents(): void {
    // console.log( 'this is the data: ' + this.service.getEvents());
    this.service.getEvents()
    .subscribe(res => this.events = res.slice(0, 3));
  }

}
