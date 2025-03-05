import { getRandomPokemon } from '../components/randomPokemon';

export async function homeTemplate() {
  const pokemonList = await getRandomPokemon();
  return `
    <div class="pokemon-container">
      ${pokemonList
        .map(
          (pokemon) => `
        <div class="pokemon-card">
          <img src="${pokemon.sprites.front_default}" class="pokemon-img" alt="${pokemon.name}">
          <div class="pokemon-info">
            <h5 class="pokemon-id">#${pokemon.id}</h5>
            <h5 class="pokemon-name">${pokemon.name.toUpperCase()}</h5>
            <p class="pokemon-types">
              ${pokemon.types
                .map((type) => `<span class="pokemon-type ${type.type.name}">${type.type.name}</span>`)
                .join(" ")}
            </p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
