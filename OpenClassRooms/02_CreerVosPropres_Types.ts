//déclaration de nos propres types (alias)
type WithMagic = {
    magic: number;
 };
 
 type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 type Pet = Character;
 type MagicalPet = Pet & WithMagic;
 
 type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
 };
 
 type Hero = Character & {
    pets?: Array<Pet>;
    equipments?: Array<Equipment>;
 };
 
 type Magician = Hero & WithMagic;

 //utilisation de nos types de variable
 const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };

 const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSword: Equipment = {
    price: 20,
    attack: 5,
 };
 
 const smallShield: Equipment = {
    price: 15,
    defense: 10,
 };