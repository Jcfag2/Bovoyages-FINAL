export class Voyageur{
    id:number;
    civilite:string;
    prenom:string;
    nom:string;
    dateNaissance:Date;

    // constructor(id:number, civilite:string, prenom:string, nom:string, dateNaissance:Date){
    //     this.id = id;
    //     this.civilite = civilite;
    //     this.prenom = prenom;
    //     this.nom = nom;
    //     this.dateNaissance = dateNaissance;
    // }
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
    
}