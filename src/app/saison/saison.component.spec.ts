/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaisonComponent } from './saison.component';

describe('SaisonComponent', () => {
  let component: SaisonComponent;
  let fixture: ComponentFixture<SaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
