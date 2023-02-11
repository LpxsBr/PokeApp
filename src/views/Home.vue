
<script setup>
  import Search from '../components/Search.vue';
import SearchResult from './SearchResult.vue';
import {useRenderStore} from './../stores/RenderStore'
import {usePokemonStore} from './../stores/PokemonStore'
const render = useRenderStore();
const pokemon = usePokemonStore();
</script>

<template>
    <main>
        <div class="container">
            <div class="pokeapi-main-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="pokeapi-logo">
            </div>
            <Search :btn="true" :btnPlaceholder="'pesquisar'" :search="(event)=>{
                render.setRender(true);
                pokemon.setPokemon(event.target.value)
                }" />
        </div>  
        <span v-if="render.$state.render ==  true" id="render">
            <SearchResult :close="(event)=>{render.setRender(false); window.reload()}" :pokemon="pokemon.$state.pokemon" />
        </span>
    </main>
</template>

<style>
*{
    color: #000;
}

main{
    height: calc(100vh - (200px + 80px));
}
.pokeapi-main-logo{
    display: flex;
    justify-content: center;
}
img{
    width: 40%;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -40%;
}



</style>