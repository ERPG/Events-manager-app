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
  public columnsToDisplay = ['Title', 'Description', 'Date', 'Location', 'Weather', 'Actions'];
  public searchKey: string;
  public dataSource: any;
  public weather: any;
  public iconSrc: string;
  public response: string;
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
    this.refreshData();
  }

  timeOut(data) {
    setTimeout(() => {
      if (!data) {
        this.response = 'No data';
      }
    }, 5);
  }

  fetch() {
    return this.mainService.getAllEvents().subscribe(data => {
      this.response = '';
      if (!data) {
        this.timeOut(data);
      }
      this.events = data;
      const newObject = [];
      this.events.forEach(element => {
        // Assign weather icon
        this.mainService.getCityWeather(element.location).then(
          response => {
            const responseData = response;
            if (responseData && responseData['weather']) {
              this.iconSrc = 'http://openweathermap.org/img/w/' + responseData['weather'][0].icon + '.png';
              this.loadTableData(newObject, element, this.iconSrc);
            } else {
              return 'invalid city';
            }
          },
          err => {
            const notFound = 'http://rocaldent.com.ve/rocaldent/public/images/image-not-found.png';
            this.loadTableData(newObject, element, notFound);
          }
        );
      });
    });
  }

  loadTableData(newObject: any, element, url) {
    const elementAsign = {
      ...element,
      date: new Date(element.date).toLocaleDateString(),
      weatherIcon: url
    };
    // Modify Data Object
    newObject.push(elementAsign);
    this.events = newObject;
    // Set table source
    this.dataSource = new MatTableDataSource(this.events);
    this.dataSource.sort = this.sort;
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  refreshData() {
    this.fetch();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey;
  }

  addEvent() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.minWidth = '40%';
    this.dialog.open(EventsFormComponent, dialogconfig);
    this.dialog.afterAllClosed.subscribe(data => {
      this.refreshData();
    });
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
              this.notificationsService.warn('!Deleted Successfully');
              this.refreshData();
            },
            error => {
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
    dialogconfig.minWidth = '40%';
    this.dialog.open(EventsFormComponent, dialogconfig);
    this.refreshData();
  }
}
