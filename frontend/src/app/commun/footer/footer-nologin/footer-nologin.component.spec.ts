import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNologinComponent } from './footer-nologin.component';

describe('FooterNologinComponent', () => {
  let component: FooterNologinComponent;
  let fixture: ComponentFixture<FooterNologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
