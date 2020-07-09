import React from 'react'
import RootScreen from './component'
import { useSelector } from 'react-redux'
import { selectPokemon } from '../../reducers/pokemon'

const RootScreenContainer = ({ navigation }) => {
  const pokemon = useSelector(selectPokemon)
  // TODO call getpokemon
  return (
    <RootScreen navigation={navigation} pokemon={pokemon} />
  )
}

export default RootScreenContainer
