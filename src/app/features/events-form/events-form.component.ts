import { Component, OnInit } from '@angular/core';
import { EventsFormService } from 'src/app/shared/services/events-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {
  public eventsForm: FormGroup;
  constructor(private formService: EventsFormService) {}
  ngOnInit() {
    this.eventsForm = this.formService.eventsForm;
  }
}
