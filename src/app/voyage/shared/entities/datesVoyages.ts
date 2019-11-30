import { Destination } from './destination';

export class DatesVoyages{
    id:number;
    dateAller:Date;
    dateRetour:Date;
    tarif:number;
    nbPlaces:number;
    promotion:number;
    deleted:number;
    imageURL:string;
    destination:string;
    fk_destination:number;

    constructor(id:number, dateAller:Date,dateRetour:Date, tarif:number, nbPlaces:number, promotion:number, deleted:number, imageURL:string, destination:string, fk_destination:number){
        this.id = id;
        this.dateAller = dateAller;
        this.dateRetour = dateRetour;
        this.tarif = tarif;
        this.nbPlaces = nbPlaces;
        this.promotion = promotion;
        this.deleted = deleted;
        this.imageURL = imageURL;
        this.destination = destination;
        this.fk_destination = fk_destination;
    }
}