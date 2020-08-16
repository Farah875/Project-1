import { Component, Input, OnInit } from '@angular/core';
import { Documents } from '../Interfaces/documents';
import { HttpClientModule } from '@angular/common/http';



import {DocumentsService} from '../services/documents.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() document: Document ;

  constructor(private documentService: DocumentsService) {}

  ngOnInit(): void {
    this.getDocuments(0);
  }

  getDocuments(id): void {
    this.documentService.getDocumnet(0)
    .subscribe(document => this.document = document);
  }
}
