import { getRandomPokemon } from '../components/randomPokemon'

export async function homeTemplate() {
  const pokemonList = await getRandomPokemon()
  return `
    <div class="pokemon-container">
      ${pokemonList
        .map(
          (pokemon) => `  
          <div class="pokemon-card">
          <p class="pokemon-id-bk">#${pokemon.id}</p>
          <div class=""pokemon-img> 
          <img src="${
            pokemon.sprites.other['official-artwork'].front_default
          }" class="pokemon-img" alt="${pokemon.name}">
          </div>
          <div class="pokemon-info">
            <h5 class="pokemon-name">${pokemon.name}</h5>
           <div>
            <p class="pokemon-types">
              ${pokemon.types
                .map(
                  (type) =>
                    `<span class="pokemon-type ${type.type.name}">${type.type.name}</span>`
                )
                .join(' ')}
            </p>
           </div>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `
}
