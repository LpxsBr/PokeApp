
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
            hp: resp.data.stats[0].base_stat,
            attack:resp.data.stats[1].base_stat,
            defense:resp.data.stats[2].base_stat,
            specialAttack:resp.data.stats[3].base_stat,
            specialDefense:resp.data.stats[4].base_stat,
            speed:resp.data.stats[5].base_stat,
            found: true
        })
    })

    .catch((err)=>console.log(err))


    axios.get(result.$state.result.especies)
    .then((resp)=>console.log(resp.data))
    .catch((err)=>console.log(err))

    console.log(result.$state.result.hp)
</script>

<template>
    <main class="detail">
        <div class="card">
            <div class="card-ext">
                <div class="card-int">
                    <div class="up-card">
                        <div class="title">{{ result.$state.result.name }}</div>
                        <div class="image-molde">
                            <img class="avatar" :src="result.$state.result.image" />
                        </div>
                    </div>
                    <div class="down-card">
                        <div class="information">
                            <div class="stats">
                                <h4>HP:</h4>
                                <div class="bar">
                                    <div class="complete" :style="{ width: result.$state.result.hp + 'px' }" >
                                        {{ result.$state.result.hp + '%' }}</div>
                                </div>
                            </div>
                            <div class="stats">
                                <h4>Attack:</h4>
                                <div class="bar">
                                    <div class="complete" :style="{ width: result.$state.result.attack + 'px' }" >
                                        {{ result.$state.result.attack + '%' }}</div>
                                </div>
                            </div>
                            <div class="stats">
                                <h4>Defense:</h4>
                                <div class="bar">
                                    <div class="complete" :style="{ width: result.$state.result.defense + 'px' }" >
                                        {{ result.$state.result.defense + '%' }}</div>
                                </div>
                            </div>
                            <div class="stats">
                                <h4>Attack:</h4>
                                <div class="bar">
                                    <div class="complete" :style="{ width: result.$state.result.specialAttack + 'px' }" >
                                        {{ result.$state.result.specialAttack + '%' }}</div>
                                </div>
                            </div>
                            <div class="stats">
                                <h4>Defense:</h4>
                                <div class="bar">
                                    <div class="complete" :style="{ width: result.$state.result.specialDefense + 'px' }" >
                                        {{ result.$state.result.specialDefense + '%' }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>

.detail{
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.card{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    padding: 5%;
}

.card-ext{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: blue;
    width: 300px;
    height: 400px;
}

.card-int{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    background-color: rgb(255, 213, 0);
    width: calc(300px * 0.75);
    height: calc(430px * 0.75);
    padding: 30px;
}

.up-card{
    width: 100%;
    height: 50%;
}

.title{
    display: flex;
    justify-content: center;
    background-color: azure;
    padding: 1px;
    width: 100px;
    margin-bottom: 10px;
    border-radius: 0px 5px 0px 5px;
}

.image-molde{
    display: flex;
    justify-content: center;
    background-image: url(https://2img.net/h/2.bp.blogspot.com/-q-6z6tk95Kg/T83c7oDJ5OI/AAAAAAAAaOg/VUo8YWEJ8cI/s1600/Svcgreenofforestbg.gif);
    background-position: bottom;
    width: 100%;
    height: 120px;
}

.avatar{
    width: 140px;
    height: 140px;
}

.down-card{
    display: flex;
    align-items: center;
    background-color: yellow;
    width: 90%;
    height: 40%;
    padding: 10px;
}

.stats{
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}

.bar{
    background-color: antiquewhite;
    width: 100px;
    height: 15px;
}

.complete{
    background-color: green;
    height: 100%;
    color: aliceblue;
    display: flex;
    justify-content: center;
}
.information{
    width: 100%;
    height: 70%;    
}

</style>