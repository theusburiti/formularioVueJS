import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formularios: [],
  },
  mutations: {
    adcionarFormulario(state, payloader) {
      state.formularios.push(payloader);
    },
  },
});
