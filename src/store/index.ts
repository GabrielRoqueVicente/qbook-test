import Vue from 'vue';
import Vuex from 'vuex';

import ShoppingList from '@/store/modules/ShoppingList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShoppingList,
  },
});
