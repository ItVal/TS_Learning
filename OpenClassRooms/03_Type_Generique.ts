type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 type Pet = Character;

//supposons un type shop
type Shop = {
    name: string;
    owner: Character; // Le même "Character" qu'on a vu au chapitre précédent
    items: Array<unknown>; //unknown signifie que ce champs peut accepter un tableau qui peux accepter n'importe quel type
};