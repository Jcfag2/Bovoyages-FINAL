import { Injectable } from '@angular/core';
import { Destination } from '../entities/destination';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable, of } from 'rxjs';
import { DatesVoyages } from '../entities/datesVoyages';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private url = "";
  // private client = new Client(1, "raoul");
  // private voyageurs = new Voyageur(1, "M", "Jean", "Robert", new Date());
  // private voyages = [
    //   new Voyage(1, "london", "il pleut un peu", this.datesVoyages, this.client, this.voyageurs),
    //   new Voyage(1, "Paris", "C'est cool quand les gens ne ralent pas trop", this.datesVoyages, this.client, this.voyageurs),
    //   new Voyage(1, "Cracovie", "la famille", this.datesVoyages, this.client, this.voyageurs)
    // ];
    
    constructor(private httpClient: HttpClient) { }
    // client = new Client(client.id, client.name);
    
    //=> GET localhost:4200/
    // getVoyages(): Observable<Voyage> {
      //   return this.httpClient.get<Voyage[]>(this.url).pipe(
        //     map(result => result.map(voyage => new Voyage(voyage.id, voyage.region, voyage.descriptif, voyage.datesVoyages, voyage.client, voyage.voyageurs)))
        //   );
        // }
        
  // private datesVoyages = new DatesVoyages(1, new Date(),new Date(), 200, 10, 0, 0, "image1.png");
  private datesVoyages = [
    new DatesVoyages(1, new Date(), new Date(), 500, 9, 0, 0, "une image", "london", 1),
    new DatesVoyages(2, new Date(), new Date(), 1000, 9, 0, 0, "une image", "Paris", 3),
    new DatesVoyages(3, new Date(), new Date(), 40, 9, 0, 0, "une image", "Cracovie", 4)
  ];
  
  // getAllDestinationsMoinsCher():Promise<DatesVoyages[]>{
  //   return new Promise<DatesVoyages[]>( (resolve, reject) =>
  //   {
  //     resolve(this.datesVoyages)
  //   })
  // }

  getAllDestinationsMoinsCher(): Observable<DatesVoyages[]>{
    // return of(this.datesVoyages);
    return this.httpClient.get<DatesVoyages[]>('destinations/uniques');
  }

  // getAllDestinationsMoinsCher(): Observable<DatesVoyages[]>{
  //   return of(this.datesVoyages);
  // }

  // getAllDestinationsMoinsCher(){
  //   return this.httpClient.get<DatesVoyages[]>('destinations/uniques').map((res: Response) => res.json())
  // }

}
