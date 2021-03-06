// 3rd party libs
import Vue from 'vue';
import App from './App.vue';

// store
import store from './store';

// styles
import './assets/styles/base.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
