import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTableComponent } from './events-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from './../../core/services/main.service';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EventsManagerComponent', () => {
  let component: EventsTableComponent;
  let fixture: ComponentFixture<EventsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTableComponent],
      providers: [HttpClient, MainService],
      imports: [HttpClientModule, MaterialModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
