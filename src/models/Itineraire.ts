export default interface Itineraire {
    _id: string;
    nom: string;
    activite: string;
    distance: number;
    difficulte: number;
    denivele: number;
    image: string;
    descriptif: string;
    secteurGeo: Array<string>;

   
}