import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++
    },
    getters:{
        getCount: state => state.count * 2
    }
});