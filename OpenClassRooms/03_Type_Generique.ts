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

//Utilisation de types génériques proposés par TypeScript, appelé types utilitaires
//01 Partial<> : Ce type utilitaire prend en paramètre un type représentant un objet, et il retourne un type représentant ce même objet, mais avec toutes ces propriétés marquées comme étant optionnelles.

type Character = {
    // Toutes les propriétés sont requises (elles n'ont pas le signe "?")
    name: string;
    life: number;
    attack: number;
    defense: number;
};
const myCharacter: Partial<Character> = {
    // On ne fournit que le nom, pas le reste des propriétés.
    // On n'a pas d'erreur car "Partial" rend
    // toutes les propriétés optionnelles.
    name: 'Mario',
};

//02. Record<KeyType, ValueType> : Cet utilitaire permet de définir des types d’objets
// On définit un type représentant un objet dont les clés
// sont des chaînes de caractères (n'importe lesquelles)
// et les valeurs sont des nombres
type CollectionOfNumbers = Record<string, number>;
const stats: CollectionOfNumbers = {
    age: 45,
    life: 100,
    magic: 10,
    whateverTheNameItMustContainANumber: 20,
};

// On peut utiliser une union pour n'autoriser que des clés spécifiques
type StatisticNames = 'life' | 'attack' | 'defense';
const stats: Record<StatisticNames, number> = {
    life: 100,
    attack: 10,
    defense: 20,
};