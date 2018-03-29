import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    todos: {},
    ids: []
};

export const mutations = {
    TOGGLE_COMPLETE(state, { id }){
        state.todos[id].complete = !state.todos[id].complete;
    },

    CREATE_TODO(state, { text }) {
        let id  = state.ids.length + 1;
        state.todos = Object.assign({}, 
            state.todos, {
                [id]: { text, complete: false }
            }
        );

        state.ids.push(id);
    }

};

export default new Vuex.Store({
    state,
    mutations
});