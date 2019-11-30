import { DatesVoyages } from './datesVoyages';

export class Destination {
    id:number;
    region:string;
    descriptif:string;
    images:string[];
    datesVoyages: DatesVoyages;
    deleted:number;
    

    constructor(id:number, region:string, descriptif:string, images:string[], datesVoyages:DatesVoyages, deleted:number){
        this.id = id;
        this.region = region;
        this.descriptif = descriptif;
        this.images = images;
        this.datesVoyages = datesVoyages;
        this.deleted = deleted;
    }
}