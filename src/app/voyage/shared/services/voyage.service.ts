import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  client:Client;

  constructor(private httpClient: HttpClient) { }
  
  getClientByNom(): Observable<Client>{
   const nom = localStorage.getItem('userName')
    return this.httpClient.get<Client>('client/' + nom);
  }
  
  getVoyagesClient(client:Client): Observable<Voyage[]>{
    client = this.getClientByNom()
    console.log(client);
    return this.httpClient.post<Voyage[]>('voyage/client/all',client);
  }
  

}
