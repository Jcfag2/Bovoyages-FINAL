import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  user: User;
  isAuth: boolean = false;
  userName: String = localStorage.getItem('userName');
  LogInOut: String = localStorage.getItem('LogInOut');
  

  constructor(private userService: UserService, private authService: AuthService) {
    authService.getLoggedInName.subscribe(name => this.changeName(name))
    authService.getLoggedInOut.subscribe(loginout => this.changeLogger(loginout))
   }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => { this.user = user });
    this.isAuth = this.authService.isLoggedIn();
  }

  // onLogIn() {
  //   this.authService.logIn();
  //   this.isAuth = this.authService.isLoggedIn();
  // }

  onLogOut() {
    this.authService.logOut();
    this.isAuth = this.authService.isLoggedIn();
  }

  private changeName(name: string): void {
    this.userName = name;
}

private changeLogger(loginout: string): void {
  this.LogInOut = loginout;
}


}
