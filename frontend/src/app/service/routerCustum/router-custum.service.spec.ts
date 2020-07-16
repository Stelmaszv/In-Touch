import { TestBed,fakeAsync,tick,async } from '@angular/core/testing';
import { RouterCustumService } from './router-custum.service';
let RouterSpy: { get: jasmine.Spy };
describe('RouterCustumService', () => {
  let service: RouterCustumService;
  beforeEach(() => {
    RouterSpy = jasmine.createSpyObj('Router', ['get']);
    service = new RouterCustumService(<any> RouterSpy);
  });

  it('test if created', () => {
    expect(service).toBeTruthy();
  });

  it('test Get_Rout', () => {
    expect(service.Get_Rout('Login')).toBe('/login');
  });

});
