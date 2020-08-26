import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Events} from '../Interfaces/events';
import {EventService} from '../services/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Events[] = [];

  constructor( private service: EventService,
               public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllEvents();
    // this.getImages();
  }

  getAllEvents(): void {
    // console.log( 'this is the data: ' + this.service.getEvents());
    this.service.getEvents()
    .subscribe(res => this.events = res.slice(0, 5));

    // console.log('now santizing');

    // tslint:disable-next-line: prefer-for-of
    // for (let index = 1; index < this.events.length; index++) {
    //   // const element = this.events[index];
    //   console.log('enter');
    //   const element  = this.sanitizer.bypassSecurityTrustHtml(this.events[index].Image);
    //   this.events[index].ImageURL = element;
    //   console.log('sanitize element:' + element);
    // }


    // console.log('sanitized');
  }

  // getImages(): void {
  //   console.log('enter get Images');
  //    for (let index = 1; index < this.events.length; index++) {
  //     // const element = this.events[index];
  //     console.log('enter');
  //     const element  = this.sanitizer.bypassSecurityTrustHtml(this.events[index].Image);
  //     this.events[index].ImageURL = element;
  //     console.log('sanitize element:' + element);
  //   }
  // }

  sanitizing(url): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

// "DomSanitizationService.bypassSecurityTrustUrl({{event.Image}};base64, +alarms.image)"
