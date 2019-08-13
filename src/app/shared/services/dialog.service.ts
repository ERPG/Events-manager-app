import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog() {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '390px',
      panelClass: 'em-confim-dialog',
      disableClose: true
    });
  }
}
