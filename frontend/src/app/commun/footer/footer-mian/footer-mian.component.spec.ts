import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMianComponent } from './footer-mian.component';

describe('FooterMianComponent', () => {
  let component: FooterMianComponent;
  let fixture: ComponentFixture<FooterMianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
