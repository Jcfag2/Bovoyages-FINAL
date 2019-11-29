export class DatesVoyages{
    id:number;
    dateAller:Date;
    dateRetour:Date;
    tarif:number;
    nbPlaces:number;
    promotion:number;
    deleted:number;
    imageURL:string;

    constructor(id:number, dateAller:Date,dateRetour:Date, tarif:number, nbPlaces:number, promotion:number, deleted:number, imageURL: string){
        this.id = id;
        this.dateAller = dateAller;
        this.dateRetour = dateRetour;
        this.tarif = tarif;
        this.nbPlaces = nbPlaces;
        this.promotion = promotion;
        this.deleted = deleted;
        this.imageURL = imageURL;
    }
}