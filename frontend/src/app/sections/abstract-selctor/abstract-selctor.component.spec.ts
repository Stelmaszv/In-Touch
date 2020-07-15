import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSelctorComponent } from './abstract-selctor.component';

describe('AbstractSelctorComponent', () => {
  let component: AbstractSelctorComponent;
  let fixture: ComponentFixture<AbstractSelctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractSelctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSelctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
