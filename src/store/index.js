import Vue from "vue";
import Vuex from "vuex";
import mqttStore from './modules/mqtt'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mqttStore
    }
});