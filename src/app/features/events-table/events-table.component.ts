import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventsFormComponent } from 'src/app/features/events-form/events-form.component';
import { EventsFormService } from 'src/app/shared/services/events-form.service';
import { MainService } from 'src/app/core/services/main.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { NotificationsService } from './../../shared/services/notifications.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  public events: any;
  public columnsToDisplay = ['Title', 'Description', 'Date', 'Location', 'Actions'];
  public searchKey: string;
  public dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private mainService: MainService,
    private dialog: MatDialog,
    private eventsService: EventsFormService,
    private notificationsService: NotificationsService,
    private confirmDialogService: DialogService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    return this.mainService.getAllEvents().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.changeDetectorRefs.detectChanges();
    });
  }
  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey;
  }

  addEvent() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(EventsFormComponent, dialogconfig);
  }

  onDelete(event) {
    const id = event._id;

    this.confirmDialogService
      .openConfirmDialog()
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.mainService.deleteEvent(id).subscribe(
            data => {
              console.log('Data DELETED');
              console.log(data);
              this.notificationsService.warn('!Deleted Successfully');
            },
            error => {
              console.log('ERROR');
              console.log(error);
            }
          );
        }
      });
  }

  onEdit(event) {
    this.eventsService.populateForm(event);
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(EventsFormComponent, dialogconfig);
  }
}
