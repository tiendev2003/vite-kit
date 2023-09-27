import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload;
        },
        logoutUser(state) {
            state.user = null;
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit('loginUser', payload);
        },
        remove_user(context) {
            context.commit('logoutUser');
        }
    },
    getters: {
        getHash: (state) => {
            return state.user.avartar;
        }
    },
    plugins: [createPersistedState()]
});
export default store;
