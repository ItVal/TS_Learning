type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 type Pet = Character;
 type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
};
//supposons un type shop
type Shop = {
    name: string;
    owner: Character; // Le même "Character" qu'on a vu au chapitre précédent
    equipements: Array<unknown>; //unknown signifie que ce champ équipement peut accepter un tableau qui peux accepter n'importe quel type
};
//donnons ce champs équipements, le type Equipement
type Armory = Shop & { //le type Armory contient desormais le type shop et on précise évidement le type de noms équipement de (Shop) = Equipement
    equipements: Array<Equipment>;
};