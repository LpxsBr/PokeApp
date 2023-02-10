import axios from "axios";
import reading from './../search.js'

function PokeApi(){
    const api = axios.get("https://pokeapi.co/api/v2/pokemon/"+reading.methods.greet+"/").then((resp)=>{
        console.log(resp.data.id)
    }).catch((err)=>console.log(err))
    return api
}


export default PokeApi;