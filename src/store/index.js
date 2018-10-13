import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import todo from './modules/todo';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter,
        todo,
    },
    actions,
    mutations,
});
