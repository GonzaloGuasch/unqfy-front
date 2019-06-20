import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlus, faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faPen, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
