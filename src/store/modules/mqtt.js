const state = {
    isMQTTConnected: false
}

const mutations = {
    setConnectionState(state, bool) {
        state.isMQTTConnected = bool;
    }
}

export default {
    namespaced: true,
    state,
    // getters,
    mutations
    // actions
}