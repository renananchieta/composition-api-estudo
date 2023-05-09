import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
    //state
    state(){
        return {
            count:0
        }
    },

    //action
    actions:{
        increment(){
            this.count++;
        }
    },

    //getter
    getters:{
        showCount(){
            return 'O valor do count é: '+this.count
        }
    },
});