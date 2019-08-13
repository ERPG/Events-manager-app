import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsFormService } from 'src/app/shared/services/events-form.service';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MaterialModule } from 'src/app/material/material.module';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  providers: [EventsFormService, DialogService, NotificationsService],
  exports: []
})
export class SharedModule {}
