function addition(x: number, y: number): number {
    return x + y;
}
const result:number = addition(10, 20);
console.log(result);


function damage(characterToDamage: {life:number}, amount: number): number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const res = damage({ life: 100 }, 12);
console.log(res);