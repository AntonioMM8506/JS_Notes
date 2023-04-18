export const getPokemonData = (pokemonName: string) => {
  return {
    type: 'getPokemon',
    payload: pokemonName
  }
}