const initialState = {
  pokemons: [],
  loading: true
}

const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getPokemon":
      return {
        ...state,
        pokemonData: action.payload,
        loading: false
      }
    
    default:
      return state
  }
}

export default pokemonReducer
