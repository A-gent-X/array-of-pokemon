/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [ 
    "poke ball", "poke ball",
"potion", "beef jerky", "running shoes"
]
   
let pokemon = []

backpack.push("oreos")
backpack.push("oreos")

console.log("after buying oreos, this is our backpack:")
console.log(backpack)

backpack.push("pokedex")
pokemon.push("pikachu")

console.log("after ,eetomg professor oak, our backpack and pokemon are:")
console.log(backpack)
console.log(pokemon)


for(let i = 0; i < 4; i++)
pokemon.push("pidgey")
console.log("after the pidgeys, our pokemon are now:")
console.log(pokemon)

backpack.splice(3, 4);
console.log("doug ate his food and gave his shoes away")
console.log(backpack)

let newPokemon = "Charizard"

pokemon.push(newPokemon)

console.log("after catching charizard, our pokemon is now:")
console.log(pokemon)

console.log("here is my pikachu!")
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

let clonedPidgeys = pokemon.slice(1, 5)
console.log("here are your cloned pidgeys")
console.log(clonedPidgeys)

console.log("checking to make sure my pokemon are all still here:")
console.log(pokemon)

backpack.unshift("jynx statue")
console.log("backpack after adding the statue:")
console.log(backpack)

backpack.shift()
console.log(backpack)

let favePokemon = "butterfree"
backpack.shift()
let lunch = pokemon.splice(3,1, favePokemon)
console.log(pokemon)
console.log(backpack)
console.log(lunch)

for (let i = 0; i < pokemon.length; i++){
    if(pokemon[i] === "pidgey"){
        pokemon[i] = "pidgeotto"
    }
}

console.log("after the evolution event, my pokemon are now:")
console.log(pokemon)