import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFormComponent } from './events-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from './../../core/services/main.service';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EventsFormService } from './../../shared/services/events-form.service';
import { MatDialogRef } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('EventsFormComponent', () => {
  let component: EventsFormComponent;
  let fixture: ComponentFixture<EventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsFormComponent],
      providers: [HttpClient, MainService, EventsFormService, DialogService, { provide: MatDialogRef, useValue: {} }],
      imports: [HttpClientModule, MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect Form to be defined', () => {
    component.ngOnInit();
    expect(component.eventsForm).toBeDefined();
  });

  it('expect form invalid when empty', () => {
    expect(component.eventsForm.valid).toBeFalsy();
  });

  it('Title field validity', () => {
    const title = component.eventsForm.controls['title'];
    expect(title.valid).toBeFalsy();

    // set title value
    title.setValue('test');
    expect(title.valid).toBeTruthy();
  });

  it('Description field validity', () => {
    const description = component.eventsForm.controls['description'];
    expect(description.valid).toBeFalsy();

    // set title value
    description.setValue('test');
    expect(description.valid).toBeTruthy();
  });
  it('Date field validity', () => {
    const date = component.eventsForm.controls['date'];
    expect(date.valid).toBeFalsy();

    // set title value
    const d = new Date();
    date.setValue(d);
    expect(date.valid).toBeTruthy();
  });

  it('Location field validity', () => {
    const location = component.eventsForm.controls['location'];
    expect(location.valid).toBeFalsy();

    // set title value
    location.setValue('test');
    expect(location.valid).toBeTruthy();
  });
  it('Expect form to be invalid onClear method', () => {
    component.eventsForm.controls['title'].setValue('Go to Disney');
    component.eventsForm.controls['description'].setValue('Train');
    const d = new Date();
    component.eventsForm.controls['date'].setValue(d);
    component.eventsForm.controls['location'].setValue('Barcelona');
    expect(component.eventsForm.valid).toBeTruthy();

    // Trigger the clear function
    component.onClear();

    fixture.detectChanges();

    expect(component.eventsForm.valid).toBeFalsy();
  });

  it('Should call addEvent when new Event', () => {
    expect(component.eventsForm.valid).toBeFalsy();
    component.eventsForm.controls['title'].setValue('Go to Disney');
    component.eventsForm.controls['description'].setValue('Train');
    const d = new Date();
    component.eventsForm.controls['date'].setValue(d);
    component.eventsForm.controls['location'].setValue('Barcelona');
    expect(component.eventsForm.valid).toBeTruthy();

    // Create Spy
    const spy = spyOn(component, 'addEvent').and.callThrough();
    // Trigger the submit function
    component.onSubmit();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('Should call updateEvent when is an update', () => {
    expect(component.eventsForm.valid).toBeFalsy();
    component.eventsForm.controls['title'].setValue('Go to Disney');
    component.eventsForm.controls['description'].setValue('Train');
    const d = new Date();
    component.eventsForm.controls['date'].setValue(d);
    component.eventsForm.controls['location'].setValue('Barcelona');
    component.eventsForm.controls['_id'].setValue('78698768765');
    expect(component.eventsForm.valid).toBeTruthy();
    console.log(component.eventsForm);
    // Create Spy
    const spy = spyOn(component, 'updateEvent').and.callThrough();
    // Trigger the submit function
    component.onSubmit();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('Should call add event on the main service', () => {
    const service = TestBed.get(MainService);
    const data = {
      title: 'fake-title',
      description: 'fake-description',
      date: new Date(),
      location: 'fake-location'
    };

    // Create Spy
    const spy = spyOn(service, 'addEvent').and.callThrough();
    // Trigger the submit function
    component.addEvent(data);

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('Should call update event on the main service', () => {
    const service = TestBed.get(MainService);
    const data = {
      _id: '98798769786',
      title: 'fake-title',
      description: 'fake-description',
      date: new Date(),
      location: 'fake-location'
    };

    // Create Spy
    const spy = spyOn(service, 'updateEvent').and.callThrough();
    // Trigger the submit function
    component.updateEvent(data);

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
