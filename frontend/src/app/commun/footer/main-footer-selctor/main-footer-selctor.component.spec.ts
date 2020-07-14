import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooterSelctorComponent } from './main-footer-selctor.component';

describe('MainFooterSelctorComponent', () => {
  let component: MainFooterSelctorComponent;
  let fixture: ComponentFixture<MainFooterSelctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFooterSelctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFooterSelctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
