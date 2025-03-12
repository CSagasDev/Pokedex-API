import { getPokemonList } from '../components/api.js'
import { getPokemon } from '../components/api.js'
import { pokedexTemplate } from '../templates/pokedexTemplate.js'

const MAX_POKEMON = 150 
const PAGE_SIZE = 10 

let currentOffset = 0

export async function loadPokedex(offset = 0) {
  currentOffset = offset

  const pokemonData = await getPokemonList(offset, PAGE_SIZE)

  const pokemonList = await Promise.all(
    pokemonData.results.map((pokemon) => getPokemon(pokemon.name))
  )

  document.getElementById('app').innerHTML = await pokedexTemplate(pokemonList)

  const prevButton = document.getElementById('prevPage')
  const nextButton = document.getElementById('nextPage')

  prevButton.addEventListener('click', () => {
    if (currentOffset >= PAGE_SIZE) {
      loadPokedex(currentOffset - PAGE_SIZE)
    }
  })

  nextButton.addEventListener('click', () => {
    if (currentOffset + PAGE_SIZE < MAX_POKEMON) {
      loadPokedex(currentOffset + PAGE_SIZE)
    }
  })

  prevButton.disabled = currentOffset === 0
  nextButton.disabled = currentOffset + PAGE_SIZE >= MAX_POKEMON
}