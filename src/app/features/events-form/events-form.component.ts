import { Component, OnInit } from '@angular/core';
import { EventsFormService } from 'src/app/shared/services/events-form.service';
import { FormGroup } from '@angular/forms';
import { MainService } from 'src/app/core/services/main.service';
import { NotificationsService } from './../../shared/services/notifications.service';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {
  public eventsForm: FormGroup;
  constructor(
    private formService: EventsFormService,
    private mainService: MainService,
    private notification: NotificationsService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<EventsFormComponent>
  ) {}

  ngOnInit() {
    this.eventsForm = this.formService.eventsForm;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onClear() {
    this.eventsForm.reset();
  }

  onSubmit() {
    if (this.eventsForm.valid) {
      const { title, description, date, location, _id } = this.eventsForm.value;

      let eventToSubmit: any;

      if (_id) {
        console.log('UPDATE!');
        eventToSubmit = { title, description, date: date.toLocaleDateString(), location, _id };
        this.updateEvent(eventToSubmit);
      } else {
        eventToSubmit = { title, description, date: date.toLocaleDateString(), location };
        console.log('NEW!');
        this.addEvent(eventToSubmit);
      }
      // console.log(eventToSubmit);
      this.dialog.closeAll();
    }
  }

  updateEvent(event) {
    this.mainService.updateEvent(event).subscribe(
      data => {
        this.eventsForm.reset();
        this.notification.success(':: Updated successfully');
      },
      error => {
        console.log('error on Update --> ');
        console.log(error);
      }
    );
  }

  addEvent(event) {
    this.mainService.addEvent(event).subscribe(
      data => {
        this.eventsForm.reset();
        this.notification.success(':: Submitted successfully');
      },
      error => {
        console.log('error on Submit --> ');
        console.log(error);
      }
    );
  }
}
