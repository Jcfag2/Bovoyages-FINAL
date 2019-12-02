import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  redirectUrl: string;


  constructor(private router: Router, private httpClient: HttpClient, private userService: UserService) { }

  isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth'));
    return this.isAuth;
  }

 /* logIn(user) {
        this.isAuth = true;
        this.router.navigate(['/album'])
        this.userService.setUser(user);
        localStorage.setItem('auth','true');

  }*/
   logIn(user, cb) {
    console.log(user.nom, user.password);
    const params = new HttpParams()
    .set('nom', user.nom)
    .set('password', user.password);

     this.httpClient.post('connexion', params).subscribe(
      (status) => {
        if(status) {
          this.isAuth = true  ;
          
          this.router.navigate([this.redirectUrl])
          this.userService.setUser(user);
        localStorage.setItem('auth','true');
          
        } else {
          cb("Identifiants incorrects")
        }

      },
      (err) => cb("Identifiants incorrects")
    );
  
  } 

  logOut() {
    this.isAuth = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);

  }
}

