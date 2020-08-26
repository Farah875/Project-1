import { Component, OnInit } from '@angular/core';
import { Calender} from '../Interfaces/calender';
import { CalenderService } from '../services/calender.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  calenderItems: Calender[] = [];

  constructor(private service: CalenderService) { }

  ngOnInit(): void {
    this.getCal();
  }

  getCal(): void {
    // console.log(this.service.getCalender());
    this.service.getCalender()
    .subscribe(res => this.calenderItems = res);
  }

}
// getHeroes(): void {
//   this.heroService.getHeroes()
//     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
// }
