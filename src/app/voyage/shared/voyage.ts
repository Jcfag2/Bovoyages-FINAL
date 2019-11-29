import { Voyageur } from './voyageurs';
import { DatesVoyages } from './datesVoyages';
import { Client } from './client';

export class Voyage{
    id:number;
    region:string;
    descriptif:string;
    dateVoyage:DatesVoyages;
    client:Client;
    voyageurs: Voyageur;

    constructor(id:number, region:string, descriptif:string, dateVoyage: DatesVoyages, client:Client, voyageurs:Voyageur){
        this.id = id;
        this.region = region;
        this.descriptif = descriptif;
        this.dateVoyage = dateVoyage;
        this.client = client;
        this.voyageurs = voyageurs;
    }
}