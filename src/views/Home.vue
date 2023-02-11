
<script setup>
  import Search from '../components/Search.vue';
import SearchResult from './SearchResult.vue';
import {useRenderStore} from './../stores/RenderStore'
import {usePokemonStore} from './../stores/PokemonStore'
const render = useRenderStore();
const pokemon = usePokemonStore();
</script>

<template>
    <main class="main-home">
        <div class="container">
            <div class="pokeapi-main-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="pokeapi-logo">
            </div>
            <Search :btn="false" :btnPlaceholder="'pesquisar'" :search="(event)=>{
                render.setRender(true);
                pokemon.setPokemon(event.target.value)
                }" />
                <div v-if="render.$state.render ===  true" id="render">
                    <SearchResult :pokemon="pokemon.$state.pokemon" />
                </div>
        </div> 
        
    </main>
</template>

<style>
.main-home{
    height: 100vh;
    padding: 3%;
}
.pokeapi-main-logo{
    display: flex;
    justify-content: center;
}
img{
    width: 50%;
}
.container{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: -40%;
}

#render{
    display: flex;
    animation: runOpacity linear 1s;
    justify-content: center;
    align-items: center;
}

@keyframes runOpacity {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}



</style>