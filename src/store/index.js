import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { formdata: [], bool: false, id: [] },

  actions: {
    updateNameList(state, payload) {
      this.state.formdata.push(payload);
      console.log(this.state.formdata);
    },
  },
  modules: {},
});
