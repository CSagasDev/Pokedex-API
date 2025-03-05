import { getPokemonList } from "../components/api.js";
import { getPokemon } from "../components/api.js";
import { pokedexTemplate } from "../templates/pokedexTemplate.js";

const MAX_POKEMON = 150; // Límite de la primera generación
const PAGE_SIZE = 10; // Cantidad de Pokémon por página

let currentOffset = 0;

export async function loadPokedex(offset = 0) {
  currentOffset = offset;

  // Obtener la lista de Pokémon con paginación
  const pokemonData = await getPokemonList(offset, PAGE_SIZE);

  // Obtener los detalles de cada Pokémon
  const pokemonList = await Promise.all(
    pokemonData.results.map(pokemon => getPokemon(pokemon.name))
  );

  // Renderizar la Pokédex en el contenedor principal
  document.getElementById("app").innerHTML = await pokedexTemplate(pokemonList);

  // Referencias a los botones
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  // Agregar eventos después de renderizar la plantilla
  prevButton.addEventListener("click", () => {
    if (currentOffset >= PAGE_SIZE) {
      loadPokedex(currentOffset - PAGE_SIZE);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentOffset + PAGE_SIZE < MAX_POKEMON) {
      loadPokedex(currentOffset + PAGE_SIZE);
    }
  });

  // **Desactivar botones si se llega al límite**
  prevButton.disabled = currentOffset === 0;
  nextButton.disabled = currentOffset + PAGE_SIZE >= MAX_POKEMON;
}