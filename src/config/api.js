import axios from "axios";

const uri = "https://pokeapi.co/api/v2"

export const getPokemon = (endpoint, params)=> axios.get(`${uri}/${endpoint}${params}`);