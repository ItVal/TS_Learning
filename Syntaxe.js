function addition(x, y) {
    return x + y;
}
var result = addition(10, 20);
console.log(result);
function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
var res = damage({ life: 100 }, 12);
console.log(res);
