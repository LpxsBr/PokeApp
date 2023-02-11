
<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios'
import {useSearchResultStore} from './../stores/SearchResultStore.js'
const result = useSearchResultStore();
const route = useRoute()


axios.get("https://pokeapi.co/api/v2/pokemon/"+route.params.id+"/")

    .then((resp)=>{
        result.setResult({
            name: resp.data.name,
            image: resp.data.sprites.front_default
        })
    })

    .catch((err)=>console.log(err))

let image = result.$state.result.image
let name = result.$state.result.name
</script>

<template>
    <main class="about">
        <div>
            <img :src=" result.$state.result.image " alt="as" class="image"/>
            <h1>
                {{ result.$state.result.name }}
            </h1>
        </div>
    </main>
</template>

<style>
*{
    color: #000;
}

main{
    height: calc(100vh - (200px + 80px));
}


</style>