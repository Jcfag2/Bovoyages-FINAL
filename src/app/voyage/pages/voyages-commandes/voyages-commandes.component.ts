import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
import { VoyageService } from '../../shared/services/voyage.service';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/entities/client';
import { Voyage } from '../../shared/entities/voyage';

@Component({
  selector: 'app-voyages-commandes',
  templateUrl: './voyages-commandes.component.html',
  styleUrls: ['./voyages-commandes.component.css']
})
export class VoyagesCommandesComponent implements OnInit {

  client:Client;
  voyages : Array<Voyage>;
  userName: String = localStorage.getItem('userName');
  LogInOut: String = localStorage.getItem('LogInOut');
  

  constructor(private userService: UserService, private authService: AuthService,private voyageService: VoyageService,private clientService: ClientService) {
    authService.getLoggedInName.subscribe(name => this.changeName(name))
    authService.getLoggedInOut.subscribe(loginout => this.changeLogger(loginout))
   }

  ngOnInit() {
    this.clientService.getClientByNom(this.userName).subscribe(
      client => {
        this.client = new Client(client.id,this.userName);
        // Object.assign({}, [this.destination]);
        // JSON.stringify(this.destination)
        // this.subscriptions = this.destination;
        console.log(this.client.name)
      },
        error => console.log(" Error of client is : " + error),
        () => this.voyageService.getVoyagesClient(this.client).subscribe(
          voyage => {
            this.voyages = voyage;
            // Object.assign({}, [this.destination]);
            // JSON.stringify(this.destination)
            // this.subscriptions = this.destination;
            console.log(this.voyages)
          },
            error => console.log(" Error of voyages : " + error),
            () => console.log("voyages finished")
          )
      );
  }

  private changeName(name: string): void {
    this.userName = name;
}

private changeLogger(loginout: string): void {
  this.LogInOut = loginout;
}

}
