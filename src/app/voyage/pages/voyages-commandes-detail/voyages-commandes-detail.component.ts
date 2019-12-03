import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-voyages-commandes-detail',
  templateUrl: './voyages-commandes-detail.component.html',
  styleUrls: ['./voyages-commandes-detail.component.css']
})
export class VoyagesCommandesDetailComponent implements OnInit {

  userName: String = localStorage.getItem('userName');
  LogInOut: String = localStorage.getItem('LogInOut');

  constructor(private authService: AuthService) { 
    authService.getLoggedInName.subscribe(name => this.changeName(name))
    authService.getLoggedInOut.subscribe(loginout => this.changeLogger(loginout))
  }

  ngOnInit() {
  }

  private changeName(name: string): void {
    this.userName = name;
}

private changeLogger(loginout: string): void {
  this.LogInOut = loginout;
}

}
