import Vue from "vue";
import Vuex from "vuex";
import mqttStore from './modules/mqtt'
import scenarioStore from './modules/scenario'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mqttStore,
        scenarioStore
    }
});