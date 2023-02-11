<script setup>

    defineProps({
        
        btn:{
            type: Boolean,
            required: false,
        },
        btnPlaceholder:{
            type: String,
            required: false
        },
        search:{
            type: Function,
            required: false
        }
    })

    // const btn = true
let name;
</script>

<template>
    <div class="search-area">
        <input type="text" placeholder="Digite o nome do Pokémon que deseja buscar :)" @change="search"/>
        <button v-if="btn == 1" >{{ btnPlaceholder || "Search" }}</button>
    </div>
</template>

<style>
.search-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

input{
    width: 60vh;
    height: 8vh;
    padding: 10px;
    border-radius: 10px;
    font-size: medium;
    border-color: #000;
    border-style: solid;
}

button{
    width: 30vh;
    height: 10vh;
    background-color: blueviolet;
    border: none;
    border-radius: 10px;
    color: aliceblue;
    font-size: medium;
}
</style>