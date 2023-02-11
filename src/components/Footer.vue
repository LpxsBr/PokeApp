<script setup>
import { RouterLink } from 'vue-router';
import IconGitHub from './icons/IconGitHub.vue';
</script>

<template>
    <footer>
        <div class="item">
            <div class="logo">
                <img class="copy-logo" alt="logo-copybase" src="https://uploads-ssl.webflow.com/6356e75722f218bac247e7c6/636180db578c477db8820169_logo-branco.svg"/>
                <img class="pokeapi-logo" alt="logo-pokeapi" src="https://avatars.githubusercontent.com/u/64151210?v=4"/>
            </div>
            <div class="menu">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <div class="social">
                <IconGitHub/>
            </div>
        </div>
    </footer>
</template>

<style>
footer{
    width: 100%;
    height: 200px;
    background: purple;
    display: flex;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    gap: 10%;
}
a{
    text-decoration: none;
    color: #fff;
    margin: 10px;
}
a:visited{
    color: #fff;
}
footer 
.menu{
    display: flex;
    flex-direction: column;
}

.logo{
    width: calc(100% / 3);
    display: flex;
    gap: 5%;
}
.pokeapi-logo{
    width: 30vh;
}
.social{
    /* width: calc(100% / 3); */
    display: flex;
    gap: 10%;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60%;
}
</style>