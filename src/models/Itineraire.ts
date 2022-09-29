export default class Itineraire {
    id: number;
    nom: string;
    activite: string;
    distance: number;
    difficulte: number;
    denivele: number;
    image: string;
    secteurGeo: string;

    constructor(
        id: number,
        nom: string,
        activite: string,
        distance: number,
        difficulte: number,
        denivele: number,
        image: string,
        secteurGeo: string,
    ){
        this.id = id;
        this.nom = nom;
        this.activite = activite;
        this.distance = distance;
        this.difficulte = difficulte;
        this.denivele = denivele;
        this.image = image;
        this.secteurGeo = secteurGeo;
    }
}