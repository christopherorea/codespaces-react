import { configureStore } from '@reduxjs/toolkit'
import { pokemonReducer } from './reducers/pokemon'

export default configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
})
