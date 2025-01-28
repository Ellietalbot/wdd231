const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

// Fetch details of a single Pokémon
async function getPokemon(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  results = data;
  console.log("Single Pokémon details: ", results);
}

getPokemon(url);


async function getPokemonList(urlList) {
  const response = await fetch(urlList);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

const output_list = document.getElementById('outputList');

function litemplate(pokemon) {
  return `<li>${pokemon.name}</li>`;
}

function doStuffList(data) {
  console.log("Pokémon List: ", data);
  const pokeList = data.results;
  pokeList.forEach((pokemon) => {
    output_list.innerHTML += litemplate(pokemon);
  });
}

getPokemonList(urlList);
