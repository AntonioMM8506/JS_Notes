import React, { FC, useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { getPokemonData } from '../state/actions/pokemonActions'

const PokemonDetail: FC = () => {
  const dispatch = useDispatch()
  const pokemonData = useSelector((state: any) => state?.pokemons?.pokemonData) // TODO: add the correct name of the op (?)

  const fetchPokemon = async () => { // TODO: why this code is working if I'm mixing async/await with promises
    /*await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => {
        dispatch(getPokemonData(res.data))
        console.log(res.data)
      })*/

      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu') // TODO: Change pokemon to render
        dispatch(getPokemonData(res.data))
        console.log(res.data)
      } catch (err) {
        console.warn(err)
      }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <Fragment>
      Hello Data
    </Fragment>
  )
}

export default PokemonDetail
