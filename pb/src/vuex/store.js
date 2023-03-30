import Vue from 'vue'
import Vuex from 'vuex'
import api from "../components/modal/api";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    getRemedios(state) {
      return state.data;
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    adicionarRemedio(state, remedio) {
      state.listaRemedios.push(remedio);
    }
  },
  actions: {
    async getUserData(context) {
      try {
        const response = await api.get('/remedios');
        context.commit('setData', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    addRemedio(context, remedio) {
      context.commit('adicionarRemedio', remedio);
    }
  }
})

export default store