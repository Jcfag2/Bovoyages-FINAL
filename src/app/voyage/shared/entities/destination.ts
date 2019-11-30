import { DatesVoyages } from './datesVoyages';

export class Destination {
    id:number;
    region:string;
    descriptif:string;
    image:string[];
    datesVoyages: DatesVoyages;
    deleted:number;
    

    constructor(id:number, region:string, descriptif:string, image:string[], datesVoyages:DatesVoyages, deleted:number){
        this.id = id;
        this.region = region;
        this.descriptif = descriptif;
        this.image = image;
        this.datesVoyages = datesVoyages;
        this.deleted = deleted;
    }
}