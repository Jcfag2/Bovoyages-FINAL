import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isAuth: boolean;
  error: string;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.logOut();
    this.isAuth = this.authService.isLoggedIn();
  }

  login(f:NgForm) {
    this.authService.logIn(f.value,
      (error) => this.error = error
      );
    this.isAuth = this.authService.isLoggedIn();
  } 

}
