import {of} from 'rxjs';

import {SpyObject} from './spyobject';
import {AccountService} from 'app/core/auth/account.service';
import Spy = jasmine.Spy;

export class MockAccountService extends SpyObject {
  getSpy: Spy;
  saveSpy: Spy;
  fakeResponse: any;
  identitySpy: Spy;
  getAuthenticationStateSpy: Spy;

  constructor() {
    super(AccountService);

    this.fakeResponse = null;
    this.getSpy = this.spy('get').andReturn(this);
    this.saveSpy = this.spy('save').andReturn(this);
    this.setIdentitySpy({});
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }

  setIdentitySpy(json: any): any {
    this.identitySpy = this.spy('identity').andReturn(of(json));
  }

  setIdentityResponse(json: any): void {
    this.setIdentitySpy(json);
    this.getAuthenticationStateSpy = this.spy('getAuthenticationState').andReturn(of(json));
  }
}
