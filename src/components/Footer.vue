<script setup>
import { RouterLink } from 'vue-router';
import IconGitHub from './icons/IconGitHub.vue';
</script>

<template>
    <footer>
        <nav class="footer">
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
        </nav>
    </footer>
</template>

<style>
footer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    background-color: rgb(0, 0, 143);
    border: 1px solid white;
    }
.copy-logo,
.pokeapi-logo{
    width: 20%;
}
.footer{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    /* border: 1px solid white; */
}

.footer .logo,
.social{
    height: 100%;
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.footer .menu{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 600px){
    footer{
        height: 400px;
    }
    .footer
    .logo,
    .social{
        height: 20%;
    }
}
</style>