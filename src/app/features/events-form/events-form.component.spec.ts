import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFormComponent } from './events-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from './../../core/services/main.service';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EventsFormService } from './../../shared/services/events-form.service';

describe('EventsFormComponent', () => {
  let component: EventsFormComponent;
  let fixture: ComponentFixture<EventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsFormComponent],
      providers: [HttpClient, MainService, EventsFormService, DialogService],
      imports: [HttpClientModule, MaterialModule, BrowserAnimationsModule]
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
});
