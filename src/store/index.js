import Vue from 'vue'
import Vuex from 'vuex'

import { AuthStore } from './AuthStore'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        AuthStore,
    }
});

export default store