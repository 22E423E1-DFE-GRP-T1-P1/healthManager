import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: []
    },
    getters: {
        getData: state => state.data
    },
    mutations: {
        setData(state, data) {
            state.data = data
        }
    },
    actions: {
        async getUserData() {
            try {
                const response = await api.get(`/remedios `);
                this.remedios = response.data;
                console.log(this.remedios)
            } catch (error) {
                console.error(error);
            }
        },
    }
})

export default store