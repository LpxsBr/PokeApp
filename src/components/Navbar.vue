<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <img class="copybase" src="https://uploads-ssl.webflow.com/6356e75722f218bac247e7c6/636180db578c477db8820169_logo-branco.svg"/>
            </div>
            <div class="menu">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>

header{
    width: 100%;
    background-color: rgb(0, 0, 143);
}
nav{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav .logo{
    display: flex;
    width: 50%;
    justify-content: center;
}

nav .logo .copybase{
    width: 100px;
}

nav .menu{
    display: flex;
    width: 50%;
    justify-content: center;
}
@media (max-width: 600px){
    nav{
        flex-direction: column;
    }
}
/* *{
    margin: 0%;
}
header{
    width: 100%;
    height: 80px;
    background: purple;
    display: flex;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration: none;
    color: #fff;
    margin: 10px;
}
a:visited{
    color: #fff;
}
nav{
    width: 100%;
    display: flex;
    gap: 40%;
    justify-content: center;
    align-items: center;
}

nav.logo{
    width: 100%;
}

@media (max-width: 500px){
    nav{
        width: 100%;
        display: flex;
        gap: 3%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
} */
</style>