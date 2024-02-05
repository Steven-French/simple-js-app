let pokemonList = [
    { 
        name: "Bulbasaur",
        height: 7,
        types: ['grass', 'poison']
    },

    { 
        name: "Ivysaur",
        height: 10,
        types: ['grass', 'poison']
    },

    { 
        name: "Venusaur",
        height: 20,
        types: ['grass', 'poison']
    },

]


//loop to write name and height of every pokemon and declare which is big
for (let i = 0; i <= pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ")


    if (pokemonList[i].height >= 20){
        document.write("Wow, that's big!")
    }
        else { //do nothing
    }

    document.write("<br>")

}