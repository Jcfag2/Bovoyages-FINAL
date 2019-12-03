import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private url = "http://localhost:7070";
  voyage: Voyage = new Voyage();

  constructor(private httpClient: HttpClient) { }

  createVoyage(voyage:Voyage): Observable<Voyage>{ 
    return this.httpClient.post<Voyage>(this.url+"/voyage/new", voyage);
  }


  voyageur:Voyageur[];
  createVoyageObject(voyageurs:Voyageur[], client:Client, datesVoyages:DatesVoyages){
    this.voyage.voyageurs = voyageurs;
    this.voyage.client = client;
    this.voyage.dateVoyage = datesVoyages;
    
    // this.voyageur.nom = voyageurForm.nom;
    // const params = new HttpParams().set('civilite', voyageur.civilite).set('nom', voyageur.nom).set('prenom', voyageur.prenom).set('dateNaissance', voyageur.dateNaissance);
  }




  // client = new Client(client.id, client.name);

  //=> GET localhost:4200/
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
