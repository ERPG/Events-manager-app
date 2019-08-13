import { DialogService } from 'src/app/shared/services/dialog.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTableComponent } from './events-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from './../../core/services/main.service';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material';

describe('EventsManagerComponent', () => {
  let component: EventsTableComponent;
  let fixture: ComponentFixture<EventsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTableComponent],
      providers: [HttpClient, MainService, { provide: MatDialogRef, useValue: {} }],
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

  it('expect get all events to be called on init', () => {
    const service = TestBed.get(MainService);
    // Create Spy
    const spy = spyOn(service, 'getAllEvents').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('expect table Header to be defined', () => {
    const tableCol = fixture.nativeElement.querySelectorAll('th');
    expect(tableCol.length).toBe(6);
    expect(tableCol[0].innerHTML).toBe('Title');
    expect(tableCol[1].innerHTML).toBe('Description');
    expect(tableCol[2].innerHTML).toContain('Date');
  });

  it('expect to call add event method on button click', () => {
    const button = fixture.nativeElement.querySelector('button.em-em__add-button');

    const spy = spyOn(component, 'addEvent').and.callThrough();

    button.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('expect to call add event method on button click', () => {
    const button = fixture.nativeElement.querySelector('button.em-em__add-button');

    const spy = spyOn(component, 'addEvent').and.callThrough();

    button.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('Should ask for confirmation on delete', () => {
    const service = TestBed.get(DialogService);
    const data = {
      _id: '98798769786',
      title: 'fake-title',
      description: 'fake-description',
      date: new Date(),
      location: 'fake-location'
    };
    const button = fixture.nativeElement.querySelector('button.em-em__add-button');

    const spy = spyOn(service, 'openConfirmDialog').and.callThrough();

    component.onDelete(data);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
