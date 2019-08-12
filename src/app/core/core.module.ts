import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
