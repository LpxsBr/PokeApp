import { defineStore } from "pinia";

export const useRenderStore = defineStore('render', {
    state: ()=>{
        return {render: false};
    },
    actions: {
        setRender(render){
            if(render != ''){
                this.render = render;
            }
        }
    }
})