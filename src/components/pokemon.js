import React from "react";
import { useSelector } from 'react-redux';

const Pokemon = () => {

    const pokemon = useSelector(state => {
        return state.pokemon;
    });
    console.log(pokemon)
    const types = pokemon.types.map(t => <span key={t.type.name} className="type">{t.type.name}</span>);
    const stats = pokemon.stats.map(s => <span key={s.stat.name} className="stat">{s.stat.name}: {s.base_stat}</span>);
    const moves = pokemon.moves.map(m =>
        <span key={m.move.name} className="move">
            <h3>{m.move.name}</h3>
            <span>Learned at level: {m.version_group_details[0].level_learned_at}</span>
            <span>How to get it: {m.version_group_details[0].move_learn_method.name}</span>
        </span>);

    return (
        <div className="pokemonSelected">
            <div className="pokemonSelected-container">
                <div className="details-container">
                    <img src={pokemon.sprite} alt="pokemon" />
                    <div className="details">
                        <div className="types"><h1>{pokemon.name}</h1>{types}</div>
                        {stats.length > 0 && <div className="stats">{stats}</div>}
                    </div>
                </div>
                {moves.length > 0 && <div className="moves">
                    <h2>Moves:</h2>
                    <div className="moves-container">{moves}</div>
                </div>}
            </div>
        </div>
    );
};

export default Pokemon;