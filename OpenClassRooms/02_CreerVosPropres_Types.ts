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