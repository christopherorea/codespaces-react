const initialCartState = {    
    stats: [],
    types: [],
    moves: [],
    name: 'Pokémon',
    sprite: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"                        
}

export const pokemonReducer = (state = initialCartState, action) => {
    const actionHandlers = {
        "ADD_POKEMON": () => (
            action.payload
        ),
        "DEFAULT": () => state
    };

    const actionHandler = actionHandlers[action.type] || actionHandlers["DEFAULT"];
    return actionHandler();
};