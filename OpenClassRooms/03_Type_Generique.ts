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
type Potion = number;
//supposons un type shop
type Shop = {
    name: string;
    owner: Character; // Le même "Character" qu'on a vu au chapitre précédent
    equipements: Array<unknown>; //unknown signifie que ce champ équipement peut accepter un tableau qui peux accepter n'importe quel type
};
//donnons ce champs équipements, le type Equipement
type PetShop = Shop & { //le type PetShop contient desormais le type shop et on précise évidement le type de noms équipement de (Shop) = Equipement
    equipements: Array<Pet>;
};
//idem pour PetShop
type Armory = Shop & { //le type Armory contient desormais le type shop et on précise évidement le type de noms équipement de (Shop) = Equipement
    equipements: Array<Equipment>;
};

//idem jj 
type Apothecary = Shop & {
    items: Array<Potion>; // On admet qu'on a défini le type "Potion"
};

//Evitons cette redondance en faisant de 'Shop'  un générique.
//Un générique est un type TypeScript qui peut prendre en paramètre un ou plusieurs autres types. C’est le même concept que les fonctions JavaScript.
type Shop<ItemType> = {
    name: string;
    owner: Character;
    // Nous utilisons notre paramètre ici, à la place de "unknown"
    items: Array<ItemType>;
};

//utilisons maintenant notre type générique
type Armory = Shop<Equipment>;
type PetShop = Shop<Pet>;
type Apothecary = Shop<Potion>;

//utilisation de type générique avec le mot cle "interface"
// Équivalent du type générique que nous venons de voir, avec une interface
interface Shop<ItemType> {
    name: string;
    owner: Character;
    items: Array<ItemType>;
};
// Une fonction générique
function createShop<ItemType>(name: string, owner: Character, items: Array<ItemType>;): Shop<ItemType> {
    return { name, owner, items };
}
// Appel de la fonction générique
const armory = createShop<Equipment>('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2 }, []);