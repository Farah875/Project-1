import { Component, OnInit } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import {DocumentServiceService} from '../services/document-service.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  document: Documents;

  constructor( private documentService: DocumentServiceService) { }

  ngOnInit(): void {
    this.getDocument();
  }

  getDocument(): void {
    // console.log('hello ' + this.documentService.getDocuments(0));
    this.documentService.getDocuments(2)
    .subscribe(res => this.document = res);
    // .subscribe(document => this.document = document.text());
  }

}
