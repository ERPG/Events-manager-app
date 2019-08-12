import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsTableComponent } from 'src/app/features/events-table/events-table.component';

const featuresRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EventsTableComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(featuresRoutes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
