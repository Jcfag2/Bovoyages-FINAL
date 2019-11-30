import { DatesVoyages } from './datesVoyages';

export class Destination {
    id:number;
    region:string;
    descriptif:string;
    image:string;
    dateVoyage: DatesVoyages

    constructor(id:number, region:string, descriptif:string, image:string, dateVoyage:DatesVoyages){
        this.id = id;
        this.region = region;
        this.descriptif = descriptif;
        this.image = image;
        this.dateVoyage = dateVoyage;
    }
}