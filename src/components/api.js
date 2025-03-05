const API_URL = "https://pokeapi.co/api/v2";
const MAX_POKEMON = 150;
/**
 * Obtiene los datos de un Pokémon por su ID o nombre.
 */
export async function getPokemon(identifier) {
  const response = await fetch(`${API_URL}/pokemon/${identifier}`);
  return await response.json();
}

/**
 * Obtiene una lista de Pokémon con paginación.
 */
export async function getPokemonList(offset = 0, limit = 10) {
  if (offset >= MAX_POKEMON) return {results: []}
  // Ajusta el límite para no pasar de 150
  const adjustedLimit = Math.min(limit, MAX_POKEMON - offset);

  const response = await fetch(`${API_URL}/pokemon?offset=${offset}&limit=${adjustedLimit}`);
  return await response.json();
}
