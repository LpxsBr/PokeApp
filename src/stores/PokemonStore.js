import { defineStore } from "pinia";

export const usePokemonStore = defineStore('pokemon', {
    state: ()=>{
        return {pokemon: false};
    },
    actions: {
        setPokemon(pokemon){
            if(pokemon != ''){
                this.pokemon = pokemon;
            }
        }
    }
})