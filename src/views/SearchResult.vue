
<script setup>

import axios from 'axios'
import {RouterLink} from 'vue-router'
import {useSearchResultStore} from '../stores/SearchResultStore.js'
import { useRenderStore } from '../stores/RenderStore';

const props = defineProps({
        pokemon:{
            type: Number,
            required: false,
        },
        close:{
            type: Boolean,
            required: false,
        }
    })   

const result = useSearchResultStore();
const render = useRenderStore();
let base = "https://pokeapi.co/api/v2/pokemon/"+props.pokemon+"/"
axios.get(base)

    .then((resp)=>{
        result.setResult({
            id: resp.data.id,
            name: resp.data.name,
            image: resp.data.sprites.front_default,
            especies: resp.data.species.url,
            found: true
        })

    })

    .catch((err)=>{
        result.setResult({msg: "Pokemon not found",error: err.message, found: false})
        render.setRender(false)
    })

    axios.get(result.$state.result.especies)
    .then((resp)=>console.log(resp.data))
    .catch((err)=>console.log(err))
</script>

<template>
    <main class="search-results">
        <h2> Result of the search: {{ result.$state.result.name || result.$state.result.msg }}</h2>
        <div class="result">
            <RouterLink class="pokemon-card" :to="'/details/' + result.$state.result.id">
                
                    <div class="pokemon-avatar">
                        <img :src="result.$state.result.image" alt="as" class="avatar"/>
                    </div>
                    <div class="pokemon-name">
                        <h3 class="name">
                            {{ result.$state.result.name }}
                        </h3>
                    </div>
            </RouterLink>
        </div>
    </main>
</template>

<style>

main .search-results{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgb(200, 200, 249);
    padding: 20px;
    margin: 1%;
}

.result {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.result .pokemon-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(83, 103, 206);
    height: 70%;
    width: 30%;
    padding: 10px;
    border-radius: 10px;
}

.result .pokemon-card .pokemon-name, .pokemon-avatar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}


.pokemon-avatar .avatar{
    width:80%;
}

@media (max-width: 600px){
    main .search-results{
        width: 100%;
    }
    .pokemon-avatar .avatar{
        width:100%;
    }
    .result .pokemon-card{
        width: 50%;
    }

}
/* *{
    color: #000;
    
}

.main-results{
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

}

.result{
    height: 200px;
    width: 500px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}
.pokemon{
    background-color: rgb(82, 220, 220);
    height: 150px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}
.avatar{
    width: 50%;
}

.pokemon-image{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: -200;
}

.pokemon-name{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: -200;
} */

</style>