import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstracFooterComponent } from './abstrac-footer.component';

describe('AbstracFooterComponent', () => {
  let component: AbstracFooterComponent;
  let fixture: ComponentFixture<AbstracFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstracFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstracFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
