import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
const userStr ='{"id":1}'
const userJson ={"id":1}
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('test if created', () => {
    expect(service).toBeTruthy();
  });

  it('test ifAuth is False', () => {
    expect(service.ifAuth()).toBe(false)
  });

  it('test ifAuth is True', () => {
    service.createUser(userStr)
    expect(service.ifAuth()).toBe(true)
    service.logOut()
  });

  it('test getUser', () => {
    service.createUser(userStr)
    expect(service.getUser()).toEqual(userJson)
    service.logOut()
  })

});
