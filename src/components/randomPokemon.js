import { getPokemon } from './api.js'

/**
 * funcion para obtener 10 pokemon por id y luego hacer un random
 * @returns un arreglo de pokemon
 */
export async function getRandomPokemon() {
  const pokemonPromises = []
  for (let i = 0; i < 10; i++) {
    let randomId = Math.floor(Math.random() * 150) + 1
    pokemonPromises.push(getPokemon(randomId))
  }
  return await Promise.all(pokemonPromises)
}