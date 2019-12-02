import { Injectable } from '@angular/core';
import { User } from './shared/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new User('Erwan');


  constructor() { }


  getUser(): Observable<User> {
    return of(this.user);
  }
  setUser(user) {
    this.user = user;
  }

}
