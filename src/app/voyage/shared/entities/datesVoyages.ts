import { Destination } from './destination';

export class DatesVoyages{
    id:number;
    dateAller:Date;
    dateRetour:Date;
    tarifUnitaireHT:number;
    nbPlaces:number;
    promotion:number;
    deleted:number;
    fk_destination:number;
    nmDestination:string;
    imageURL:string;

    constructor(id:number, dateAller:Date,dateRetour:Date, tarifUnitaireHT:number, nbPlaces:number, promotion:number, deleted:number, fk_destination:number, nmDestination:string, imageURL:string){
        this.id = id;
        this.dateAller = dateAller;
        this.dateRetour = dateRetour;
        this.tarifUnitaireHT = tarifUnitaireHT;
        this.nbPlaces = nbPlaces;
        this.promotion = promotion;
        this.deleted = deleted;
        this.fk_destination = fk_destination;
        this.nmDestination = nmDestination;
        this.imageURL = imageURL;
    }
}