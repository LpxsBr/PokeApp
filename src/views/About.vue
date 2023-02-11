
<script setup>
</script>

<template>
    <main class="about">
        <h1>About the project</h1>
        <div>
            <p>
                The project search Pokemns consuming the PokeAPI`s API
            </p>
        </div>
        <hr>
        <div>
            <h2>
                Technologies used to create this project
            </h2>
        </div>
        <div>
            <ul>
                <li>
                    Views
                </li>
                <li>
                    States made with Pinia
                </li>
                <br/>
                <p>Example: like the React useState</p>
                <br/>
                <prev>
                    <code>
                                        import { defineStore } from "pinia";

                    export const useSearchResultStore = defineStore('results', {
                        state: ()=>{
                            return {result: []};
                        },
                        actions: {
                            setResult(result){
                                if(result != [] || result != ''){
                                    this.result = result;
                                }
                            }
                        }
                    })
                    </code>
                </prev>
                <br/>
                <br/>
                <li>
                    Vue Routes
                </li>
                <li>
                    Some components
                </li>
            </ul>
        </div>
        
    </main>
</template>

<style>
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}

.about{
    height: 100vh;
    padding: 3%;
}
.about div{
    margin: 3%;
}


</style>