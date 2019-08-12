import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from 'src/app/core/services/main.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
