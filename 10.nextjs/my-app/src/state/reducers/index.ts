import { combineReducers } from 'redux'

import pokemonReducer from './pokemonReducers'

const reducers = combineReducers({
  pokemons: pokemonReducer
})

export default reducers
