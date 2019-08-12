import { IEvent } from './../../../../server/types/types';
import { MainService } from 'src/app/core/services/main.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventsFormComponent } from 'src/app/features/events-form/events-form.component';

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
  constructor(private mainService: MainService, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    return this.mainService.getAllEvents().subscribe(data => {
      this.events = data;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.sort = this.sort;
      return this.events;
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
    this.dialog.open(EventsFormComponent);
  }
}
