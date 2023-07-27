export const addPokemon = (state) => {
  return {
    type: "ADD_POKEMON",
    payload: {
      stats: state.stats,
      types: state.types,
      moves: state.moves,
      name: state.name,
      sprite: state.sprite
    }
  }
}