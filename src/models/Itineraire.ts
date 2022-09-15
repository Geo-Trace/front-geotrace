export default class Itineraire {
    nom: string;
    activite: string;
    distance: number;
    diffuculte: number;
    denivele: number;
    image: string;
    secteurGeo: string;

    constructor(
        nom: string,
        activite: string,
        distance: number,
        diffuculte: number,
        denivele: number,
        image: string,
        secteurGeo: string
    ){
        this.nom = nom;
        this.activite = activite;
        this.distance = distance;
        this.diffuculte = diffuculte;
        this.denivele = denivele;
        this.image = image;
        this.secteurGeo = secteurGeo;
    }
}