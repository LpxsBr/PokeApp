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