export default class Itineraire {
    nom: string;
    activite: string;
    distance: number;
    difficulte: number;
    denivele: number;
    image: string;
    secteurGeo: string;

    constructor(
        nom: string,
        activite: string,
        distance: number,
        difficulte: number,
        denivele: number,
        image: string,
        secteurGeo: string
    ){
        this.nom = nom;
        this.activite = activite;
        this.distance = distance;
        this.difficulte = difficulte;
        this.denivele = denivele;
        this.image = image;
        this.secteurGeo = secteurGeo;
    }
}