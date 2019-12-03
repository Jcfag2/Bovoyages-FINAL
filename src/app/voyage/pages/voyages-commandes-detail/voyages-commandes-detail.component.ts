import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../../shared/services/voyage.service';
import { Voyage } from '../../shared/entities/voyage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voyages-commandes-detail',
  templateUrl: './voyages-commandes-detail.component.html',
  styleUrls: ['./voyages-commandes-detail.component.css']
})
export class VoyagesCommandesDetailComponent implements OnInit {

  voyage:Voyage;
  userName: String = localStorage.getItem('userName');
  LogInOut: String = localStorage.getItem('LogInOut');

  constructor(private authService: AuthService,private route: ActivatedRoute,private voyageService: VoyageService) { 
    authService.getLoggedInName.subscribe(name => this.changeName(name))
    authService.getLoggedInOut.subscribe(loginout => this.changeLogger(loginout))
  }

  ngOnInit() {
    this.voyageService.getVoyageById(this.route.snapshot.params['id']).subscribe(
      voyage => {
        this.voyage = voyage;
        // Object.assign({}, [this.destination]);
        // JSON.stringify(this.destination)
        // this.subscriptions = this.destination;
        console.log(this.voyage)
      },
        error => console.log(" Error of voyage : " + error),
        () => console.log("voyage finished")
      );
  }

  private changeName(name: string): void {
    this.userName = name;
}

private changeLogger(loginout: string): void {
  this.LogInOut = loginout;
}

onSubmit(f:NgForm){
  this.voyage.voyageurs[f.value.index].civilite = f.value.civilite
  this.voyage.voyageurs[f.value.index].nom = f.value.nom
  this.voyage.voyageurs[f.value.index].prenom = f.value.prenom
  this.voyage.voyageurs[f.value.index].dateNaissance = f.value.dateNaissance

  this.voyageService.updateVoyage(this.voyage).subscribe(
    voyage => {
      this.voyage = voyage;
      console.log(this.voyage)
    },
      error => console.log(" Error of voyage : " + error),
    );
}

}
