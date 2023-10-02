import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        user: null,
        allUser: []
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload;
        },
        logoutUser(state) {
            state.user = null;
        },
        setAllUser(state, payload) {
            state.allUser = payload;
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit('loginUser', payload);
        },
        remove_user(context) {
            context.commit('logoutUser');
        },
        async fetchAllUser() {
            try {
                let user = await axios.get('http://localhost:5000/api/v1/user/');
                this.allUser = user.data;
            } catch (error) {
                console.log(error);
            }
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
