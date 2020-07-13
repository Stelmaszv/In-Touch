import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarSelectorComponent } from './main-navbar-selector.component';

describe('MainNavbarSelectorComponent', () => {
  let component: MainNavbarSelectorComponent;
  let fixture: ComponentFixture<MainNavbarSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavbarSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
