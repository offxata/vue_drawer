// 3rd party libs
import Vue from 'vue';
import Vuex from 'vuex';

// states
import draw from './_draw';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    draw,
  },
});
