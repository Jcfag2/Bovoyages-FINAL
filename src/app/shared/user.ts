export class User {
    nom?: string;
    lastLogin: Date;

    constructor(nom: string) {
        this.nom = nom;
    }
}