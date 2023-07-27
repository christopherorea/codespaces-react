import React, { useState, useEffect } from "react"
import { getPokemon } from "../config/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListPokemons = () => {

  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [src, setSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await getPokemon('pokemon', `?offset=${count}&limit=${25}`);
      setPokemons(data.results);
    }
    getPokemons();
  }, [count]);

  const getImage = async (id) => {
    const { data } = await getPokemon('pokemon', `/${id}`)
    setSrc(data.sprites.front_default);
  }

  const setPokemon = async (id) => {
    const { data } = await getPokemon('pokemon', `/${id}`)
    dispatch({
      type: "ADD_POKEMON",
      payload: {
        name: data.name,
        stats: data.stats,
        types: data.types,
        moves: data.moves,
        sprite: data.sprites.front_default
      }
    });
    navigate("/pokemon");
  }

  const renderPokemons = pokemons.length > 0 && pokemons.map(p => {
    const id = p.url.split('/')[6];
    return (
      <div
        onClick={(e) => e.detail === 2 ? setPokemon(id) : getImage(id)}
        key={p.name}
        className="pokemon"
      >
        {p.name}
      </div>
    )
  }
  )

  return (
    <div className="listPokemons">
      <img src={src} alt="selected-pokemon" />
      <div className="render-pokemons">
        {renderPokemons}
      </div>
      <div className="paginations">
        {count > 24 && <button onClick={() => setCount(count - 25)}>{"<"}</button>}
        {count +1} - {count+25}
        {count < 125 && <button onClick={() => setCount(count + 25)}>{">"}</button>}
      </div>
    </div>
  );
}

export default ListPokemons