<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <img src="https://uploads-ssl.webflow.com/6356e75722f218bac247e7c6/636180db578c477db8820169_logo-branco.svg"/>
            </div>
            <div class="menu">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
*{
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
    gap: 70%;
    justify-content: center;
    align-items: center;
}
</style>