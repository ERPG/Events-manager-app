import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/core/services/main.service';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [HttpClient, DialogService, { provide: MatDialogRef, useValue: {} }],
      imports: [HttpClientModule, MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect to call close dialog method on button click', () => {
    const button = fixture.nativeElement.querySelector('mat-icon#close-icon');

    const spy = spyOn(component, 'closeDialog').and.callThrough();

    button.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
