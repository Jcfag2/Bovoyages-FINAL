import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  redirectUrl: string;
  private LogInOut = "LogIn";
  private userName = "Déconnecté";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  @Output() getLoggedInOut: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private httpClient: HttpClient, private userService: UserService) { }

  isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth')); 
    return this.isAuth;
  }

  signUp(user,cb){
    const params = new HttpParams()
    .set('nom',user.nom)
    .set('password',user.passwords.passwordA);
    this.httpClient.post('user/new', params).subscribe(
      (status) => {
        if(status) {
          this.httpClient.post('connexion', params).subscribe(
            (status) => {
              if(status) {
                this.isAuth = true  ;
                this.router.navigate([this.redirectUrl])
              localStorage.setItem('auth','true');
              localStorage.setItem('userName',user.nom);
              localStorage.setItem('LogInOut','LogOut');
              this.getLoggedInName.emit(user.nom);
              this.getLoggedInOut.emit('LogOut');
                
              } else {
                cb("Identifiants incorrects")
              }
      
            },
            (err) => cb("Identifiants incorrects")
          );
        } else {
          cb("Le nom d'utilisateur choisi est déjà pris, merci de renseigner un autre nom d'utilisateur.")
        }
      },
      (err) => cb("Le nom d'utilisateur choisi est déjà pris, merci de renseigner un autre nom d'utilisateur.")
    );
  }

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
        localStorage.setItem('auth','true');
        localStorage.setItem('userName',user.nom);
        localStorage.setItem('LogInOut','LogOut');
        this.getLoggedInName.emit(user.nom);
        this.getLoggedInOut.emit('LogOut');
          
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
    this.getLoggedInName.emit('Déconnecté');
    this.getLoggedInOut.emit('LogIn');
    localStorage.setItem('userName','Déconnecté');
    localStorage.setItem('LogInOut','LogIn');
    this.router.navigate(['/home']);
  }
}

