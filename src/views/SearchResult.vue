
<script setup>

import axios from 'axios'
import {RouterLink} from 'vue-router'
import { toRef } from 'vue';
import {useSearchResultStore} from '../stores/SearchResultStore.js'

const props = defineProps({
        pokemon:{
            type: Number,
            required: false,
        },
        close:{
            type: Boolean,
            required: true,
        }
    })

const {pokemon, close} = toRef(props)

    

const result = useSearchResultStore();
console.log(props.pokemon)
axios.get("https://pokeapi.co/api/v2/pokemon/"+props.pokemon+"/")

    .then((resp)=>{
        result.setResult({
            id: resp.data.id,
            name: resp.data.name,
            image: resp.data.sprites.front_default
        })
    })

    .catch((err)=>console.log(err))

</script>

<template>
    <main class="main-results">
        <div class="result">
        <input type="checkbox" @change="props.close" value="Fechar">
        <RouterLink :to="'/details/' + result.$state.result.id">
            <div class="pokemon">
                <img :src=" result.$state.result.image " alt="as" class="image"/>
                <h1>
                    {{ result.$state.result.name }}
                </h1>
            </div>
        </RouterLink>
    </div>
    </main>
</template>

<style>
*{
    color: #000;
    
}

.main-results{
    height: calc(100vh - (200px + 80px));
}

.result{
    height: 500px;
    width: 500px;
    background-color: aqua;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    top: 50%;
    left: 50%;
}
.pokemon{
    background-color: rgb(82, 220, 220);
    height: 300px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}
.image{
    width: 100%;
}


</style>