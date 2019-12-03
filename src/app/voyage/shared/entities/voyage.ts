import { Voyageur } from './voyageurs';
import { DatesVoyages } from './datesVoyages';
import { Client } from './client';

export class Voyage{
    id:number;
    region:string;
    descriptif:string;
    dateVoyage:DatesVoyages;
    client:Client;
    voyageurs: Voyageur[];

   
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
    
}