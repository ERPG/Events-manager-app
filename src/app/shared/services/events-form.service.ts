import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EventsFormService {
  constructor(private formB: FormBuilder) {}

  public eventsForm: FormGroup = this.formB.group({
    _id: [''],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    date: ['', [Validators.required]],
    location: ['', Validators.required]
  });

  populateForm(event) {
    console.log(event);
    const { title, description, date, location, _id } = event;
    const isoDate: Date = new Date(date);
    const eventM = {
      title,
      description,
      date: isoDate,
      location,
      _id
    };
    this.eventsForm.setValue(eventM);
  }
}
