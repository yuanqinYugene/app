import Vue from 'vue'
import goBack from './goBack'

let obj={
    goBack,
}

for(let k in obj){
    Vue.component(k,obj[k]);
}