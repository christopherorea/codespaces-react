import React, { useState, useEffect } from "react"
import { getPokemon } from "../config/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";

const ListPokemons = () => {

  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let click=0;


  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const { data } = await getPokemon('pokemon', `?offset=${count}&limit=${25}`);
      if (data) {
        setPokemons(data.results);
        setIsLoading(false);
      }
    }
    getPokemons();
  }, [count]);


  const setPokemon = async (id) => {
    click ++;
    const actions = {
      1: (data) => {
        setIsLoading(false);
        setSrc(data.sprites.front_default);
      },
      2: (data) => {
        dispatch({
          type: "ADD_POKEMON",
          payload: {
            name: data.name,
            stats: data.stats,
            types: data.types,
            moves: data.moves,
            sprite: data.sprites.front_default
          }
        }
        );
        navigate("/pokemon");
      }
    }
    setTimeout(async () => {
      setIsLoading(true);
      const { data } = await getPokemon('pokemon', `/${id}`);
      if (data) {
        actions[click](data);
      }
      click = 0;
    }, 150);
    
  }

  const renderPokemons = pokemons.length > 0 && pokemons.map(p => {
    const id = p.url.split('/')[6];
    return (
      <div
        onClick={(e) => setPokemon(id)}
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
      {isLoading && <Loading />}
      <img src={src} alt="selected-pokemon" />
      <div className="render-pokemons">
        {renderPokemons}
      </div>
      <div className="paginations">
        {count > 24 && <button onClick={() => setCount(count - 25)}>{"<"}</button>}
        {count + 1} - {count + 25}
        {count < 125 && <button onClick={() => setCount(count + 25)}>{">"}</button>}
      </div>
    </div>
  );
}

export default ListPokemons