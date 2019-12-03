import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from '../entities/voyage';
import { map } from 'rxjs/operators';
import { Client } from '../entities/client';
import { resolve } from 'url';
import { reject } from 'q';
import { DatesVoyages } from '../entities/datesVoyages';
import { Voyageur } from '../entities/voyageurs';


@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  // private url = "";
  // private datesVoyages = new DatesVoyages(1, new Date(),new Date(), 200, 10, 0, 0, "image1.png");
  // private client = new Client(1, "raoul");
  // private voyageurs = new Voyageur(1, "M", "Jean", "Robert", new Date());
  // private voyages = [
  //   new Voyage(1, "london", "il pleut un peu", this.datesVoyages, this.client, this.voyageurs),
  //   new Voyage(1, "Paris", "C'est cool quand les gens ne ralent pas trop", this.datesVoyages, this.client, this.voyageurs),
  //   new Voyage(1, "Cracovie", "la famille", this.datesVoyages, this.client, this.voyageurs)
  // ];
  voyage: Voyage = new Voyage();
  voyageur:Voyageur[];

  constructor(private httpClient: HttpClient) { }

  createVoyage(voyage:Voyage){ 
    console.log("le voyage reçu par createVoyage "+JSON.stringify(this.voyage));
    voyage = this.voyage;
    console.log("Le voyage qui s'apprete a etre envoyé à la requête "+ JSON.stringify(voyage));
    console.log("la requete : "+JSON.stringify(this.httpClient.post("/voyage/new", voyage)));
    this.httpClient.post("/voyage/new", voyage).subscribe(
      (voyage) => {this.voyage}
      ,
     
    );
    console.log("je récupère : "+JSON.stringify(this.voyage));
    return this.voyage;
}


  createVoyageObject(voyageurs:Voyageur[], client:Client, datesVoyages:DatesVoyages){
    this.voyage.voyageurs = voyageurs;
    this.voyage.client = client;
    this.voyage.dateVoyage = datesVoyages;
    console.log("createVoyageObject "+JSON.stringify(this.voyage));
    return this.voyage;
    // this.voyageur.nom = voyageurForm.nom;
    // const params = new HttpParams().set('civilite', voyageur.civilite).set('nom', voyageur.nom).set('prenom', voyageur.prenom).set('dateNaissance', voyageur.dateNaissance);
  }

  // client = new Client(client.id, client.name);

  //=> GET localhost:4200/
  getVoyagesClient(client: Client): Observable<Voyage[]> {
   return this.httpClient.post<Voyage[]>('/voyage/client/all', {'id' : client.id, 'nom' : client.name})
}
  // getVoyages(): Observable<Voyage> {
  //   return this.httpClient.get<Voyage[]>(this.url).pipe(
  //     map(result => result.map(voyage => new Voyage(voyage.id, voyage.region, voyage.descriptif, voyage.datesVoyages, voyage.client, voyage.voyageurs)))
  //   );
  // }
  // getVoyages():Promise<Voyage[]>{
  //   return new Promise<Voyage[]>( (resolve, reject)=> {
  //     resolve (this.voyages);
  //   })
  // }

}
