import { TestBed } from '@angular/core/testing';
import {AuthService} from '../../service/auth/auth.service'
import { AuthGuard } from './auth.guard';
import {RouterCustumService} from '../../service/routerCustum/router-custum.service'
import { Router} from '@angular/router';


describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Router] });
    guard = TestBed.inject(AuthGuard);
  });
  /*
  it('test if created', () => {
    guard = new AuthGuard(new AuthService,new RouterCustumService(<any> jasmine.createSpyObj('Router', ['get'])));
    expect(guard).toBeTruthy();
  });
  */
});
