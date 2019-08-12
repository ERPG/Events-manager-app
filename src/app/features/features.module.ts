import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from './events-table/events-table.component';
import { FeaturesRoutingModule } from 'src/app/features/features-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsFormComponent } from './events-form/events-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [EventsTableComponent, EventsFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FeaturesRoutingModule, SharedModule]
})
export class FeaturesModule {}
