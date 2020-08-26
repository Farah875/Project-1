import { Component, OnInit } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import {DocumentServiceService} from '../services/document-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  document: Documents;

  constructor( private documentService: DocumentServiceService) { }

  ngOnInit(): void {
    this.getDocument();
  }

  getDocument(): void {
    // console.log('hello ' + this.documentService.getDocuments(0));
    this.documentService.getDocuments(1)
    .subscribe(res => this.document = res);
    // .subscribe(document => this.document = document.text());
  }

}
