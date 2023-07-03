// const pokemonContainer = document.querySelector('.pokemon-container')
// const spinner = document.querySelector('#spinner');
// const previous = document.querySelector('#previouse');
// const next = document.querySelector('#next');

// let offset = 1;
// let limit = 8 //ya traemos uno por defecto

// previous.addEventListener('click', () =>{
//     if(offset != 1){
//     offset -= 9;
//     removeChildNodes(pokemonContainer);
//     fetchpokemons(offset, limit);
// }
// })

// next.addEventListener('click', () => {
//     offset += 9
//     removeChildNodes(pokemonContainer);
//     fetchpokemons(offset, limit);
// })

// function fetcPokemon(id){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(res => res.json())
//     .then(data => {
//         createpokemon(data)
//         spinner.style.display = "none";
//     })
// }
// // fetcPokemon(1)

// function fetchpokemons(offset, limit){
//     spinner.style.display = "block";
//     for(let i = offset; i<=offset + limit; i++){
//         fetcPokemon(i);
//     }
// }

// function createpokemon(pokemon){
//     const card = document.createElement('div');
//     card.classList.add('pokemon-block');

//     const spriteContainer = document.createElement('div');
//     spriteContainer.classList.add('img-container');

//     const sprite = document.createElement('img');
//     sprite.src = pokemon.sprites.front_default;

//     spriteContainer.appendChild(sprite);

//     const number = document.createElement('p');
//     number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

//     const name = document.createElement('p');
//     name.classList.add('name');
//     name.textContent = pokemon.name;

//     card.appendChild(spriteContainer);
//     card.appendChild(number)
//     card.appendChild(name);

//     pokemonContainer.appendChild(card);
// }

// function removeChildNodes(parent){
//     while(parent.firstChild){
//         parent.removeChild(parent.firstChild)
//     }
// }

// fetchpokemons(offset, limit)

// // function fetchPokemon(id) {
// //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
// //     .then(res => res.json())
// //     .then(data => {
// //         console.log("ID:", data.id);
// //         console.log("Name:", data);
// //         // Aquí puedes hacer lo que necesites con los datos del Pokémon
// //     })
// //     .catch(error => {
// //         console.log("Error:", error);
// //     });
// // }

// // fetchPokemon(1)


// codigo de chat gtp con asyn y await

const pokemonContainer = document.querySelector('.pokemon-container');
const spinner = document.querySelector('#spinner');
const previous = document.querySelector('#previouse');
const next = document.querySelector('#next');

let offset = 1;
let limit = 8;

previous.addEventListener('click', async () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    await fetchPokemons(offset, limit);
  }
});

next.addEventListener('click', async () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  await fetchPokemons(offset, limit);
});

async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }
  const data = await response.json();
  createPokemon(data);
  spinner.style.display = 'none';
}

async function fetchPokemons(offset, limit) {
  spinner.style.display = 'block';
  for (let i = offset; i <= offset + limit; i++) {
    await fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);
