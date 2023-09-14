/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25;
let jamieLannisterAttack = 35;
 
if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister");

} else{
    console.log("Jamie Lannister has better attack than Jon Snow");
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

//second attack from Jamie
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon Snow is dead")
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

let isDead = false
//Jamie uses a gatling gun at Jon  1 times as he runs into the forest
//there is a 50% chance, per gun  usage, that Jon is dead
for (let i = 1; i <= 3; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log(`John has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log(`It is a miracle! John is alive after the bombardment.`)
}

//Jamie wants Jon dead, and ensures it will happen
//he pursues Jon into the woods to use his fists
while (jonSnowHealth > 0) {
    console.log("Jamie punches Jon")
    jonSnowHealth -= 5
}

console.log("Okay, Jon did not make it, sorry.")