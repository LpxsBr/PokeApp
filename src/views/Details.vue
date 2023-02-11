
<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios'
import {useSearchResultStore} from './../stores/SearchResultStore.js'
const result = useSearchResultStore();
const route = useRoute()


axios.get("https://pokeapi.co/api/v2/pokemon/"+route.params.id+"/")

    .then((resp)=>{
        result.setResult({
            id: resp.data.id,
            name: resp.data.name,
            image: resp.data.sprites.front_default,
            especies: resp.data.species.url,
            found: true
        })
    })

    .catch((err)=>console.log(err))


    axios.get(result.$state.result.especies)
    .then((resp)=>console.log(resp.data))
    .catch((err)=>console.log(err))

</script>

<template>
    <main class="detail">
        <div>
            <img :src=" result.$state.result.image " alt="as" class="image"/>
            <h1>
                {{ result.$state.result.name }}
            </h1>
        </div>
    </main>
</template>

<style>

.detail{
    height: 100vh;
}


</style>