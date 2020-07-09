import React from 'react'
import RootScreen from './component'
import getPokemonService from '../../service/getPokemon'
import { useAsync } from 'react-async-hook'

const RootScreenContainer = ({ navigation }) => {
  // TODO hook into redux
  const asyncPokemon = useAsync(getPokemonService, [])
  return (
    <RootScreen navigation={navigation} asyncPokemon={asyncPokemon} />
  )
}

export default RootScreenContainer
