export async function pokedexTemplate(pokemonList) {
  return `
  <div>
  <nav class="pokemon-types-nav">
    <ul>
      <li><a href="#" class="type normal">Normal</a></li>
      <li><a href="#" class="type fire">Fire</a></li>
      <li><a href="#" class="type water">Water</a></li>
      <li><a href="#" class="type electric">Electric</a></li>
      <li><a href="#" class="type grass">Grass</a></li>
      <li><a href="#" class="type ice">Ice</a></li>
      <li><a href="#" class="type fighting">Fighting</a></li>
      <li><a href="#" class="type poison">Poison</a></li>
      <li><a href="#" class="type ground">Ground</a></li>
      <li><a href="#" class="type flying">Flying</a></li>
      <li><a href="#" class="type psychic">Psychic</a></li>
      <li><a href="#" class="type bug">Bug</a></li>
      <li><a href="#" class="type rock">Rock</a></li>
      <li><a href="#" class="type ghost">Ghost</a></li>
      <li><a href="#" class="type dragon">Dragon</a></li>
      <li><a href="#" class="type dark">Dark</a></li>
      <li><a href="#" class="type steel">Steel</a></li>
      <li><a href="#" class="type fairy">Fairy</a></li>
    </ul>
  </nav>
</div>

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
    <div class="pagination-buttons">
      <button id="prevPage" class="btn">Anterior</button>
      <button id="nextPage" class="btn">Siguiente</button>
    </div>
  `
}
