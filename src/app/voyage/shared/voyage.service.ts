import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from './voyage';
import { map } from 'rxjs/operators';
import { Client } from './client';
import { resolve } from 'url';
import { reject } from 'q';
import { DatesVoyages } from './datesVoyages';
import { Voyageur } from './voyageurs';


@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private url = "";
  private datesVoyages = new DatesVoyages(1, new Date(),new Date(), 200, 10, 0, 0, "image1.png");
  private client = new Client(1, "raoul");
  private voyageurs = new Voyageur(1, "M", "Jean", "Robert", new Date());
  private voyages = [
    new Voyage(1, "london", "il pleut un peu", this.datesVoyages, this.client, this.voyageurs),
    new Voyage(1, "Paris", "C'est cool quand les gens ne ralent pas trop", this.datesVoyages, this.client, this.voyageurs),
    new Voyage(1, "Cracovie", "la famille", this.datesVoyages, this.client, this.voyageurs)
  ];

  constructor() { }
  // client = new Client(client.id, client.name);

  //=> GET localhost:4200/
  // getVoyages(): Observable<Voyage> {
  //   return this.httpClient.get<Voyage[]>(this.url).pipe(
  //     map(result => result.map(voyage => new Voyage(voyage.id, voyage.region, voyage.descriptif, voyage.datesVoyages, voyage.client, voyage.voyageurs)))
  //   );
  // }
  getVoyages():Promise<Voyage[]>{
    return new Promise<Voyage[]>( (resolve, reject)=> {
      resolve (this.voyages);
    })
  }

}
