import { MainService } from './core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/core/services/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'events-manager';
  constructor(private mainService: MainService) {}
  ngOnInit() {
    const response = this.fetch();
    console.log('--- Events response ---');
    response.subscribe(data => console.log('data ----> ', data));
  }

  fetch() {
    return this.mainService.getAllEvents();
  }
}
