import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EventsFormService {
  constructor(private formB: FormBuilder) {}
  public eventsForm: FormGroup = this.formB.group({
    $key: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    date: [''],
    location: ['', Validators.required]
  });
}
