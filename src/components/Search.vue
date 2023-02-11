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
        <input type="text" placeholder="Type your pokemon name and enter :)" @change="search"/>
        <button v-if="btn == 1" >{{ btnPlaceholder || "Search" }}</button>
    </div>
</template>

<style>
.search-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3%;
    gap: 20px;
}

input{
    font-size: small;
    width: 100%;
    height: 100% ;
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

@media(max-width: 600px ){
    .search-area{
        padding: 15%;
    }
}
</style>