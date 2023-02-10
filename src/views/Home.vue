
<script setup>
  import Search from '../components/Search.vue';
  const test = () => {
    console.log("aiaiaiai")
    document.getElementById("test").innerHTML = "Pesquisou"
  }
</script>

<template>
    <main>
        <div class="container">
            <div class="pokeapi-main-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="pokeapi-logo">
            </div>
            <Search :btn="true" :btnPlaceholder="'pesquisar'" :search="()=>test()" />
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
.pokeapi-main-logo{
    display: flex;
    justify-content: center;
}
img{
    width: 40%;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -40%;
}



</style>