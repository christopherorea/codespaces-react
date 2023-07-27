import axios from "axios";

const uri = "https://pokeapi.co/api/v2"

export const getPokemon = async (endpoint, params)=> {
    await new Promise(r => setTimeout(r, 500));
    return await axios.get(`${uri}/${endpoint}${params}`);
};