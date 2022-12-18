import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userList: [{ id: 1 }],
        userDetails: {},
        repoList: [],
        searchText: ''
    },

    getters: {
        getUserList(state) {
            return state.userList
        },
        getUserDetails(state) {
            return state.userDetails;
        },
        getRepoList(state) {
            return state.repoList
        },
        getSearchText(state) {
            return state.searchText;
        }
    },

    mutations: {
        seUserList(state, payload) {
            state.userList = [...payload]
        },
        setUserDetails(state, payload) {
            state.userDetails = { ...payload }
        },
        setRepoList(state, payload) {
            state.repoList = { ...payload }
        },
        setSearchText(state, text) {
            state.searchText = text
        }
    },

    actions: {
        fetchUserList({ commit }, { pageSize }) {
            fetch(`https://api.github.com/users?per_page=${pageSize}`)
                .then(response => response.json())
                .then(data => {
                    console.log("data ", data)
                    commit('seUserList', data)
                })
        },
        fetchUserDetails({ commit }, { userId }) {
            fetch(`https://api.github.com/users/${userId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(" data ", data);
                    commit('setUserDetails', data);
                })
        },
        fetchRepoList({ commit }, { userId }) {
            fetch(`https://api.github.com/users/${userId}/repos`)
                .then(response => response.json())
                .then(data => {
                    console.log(" data ", data);
                    commit('setRepoList', data);
                })
        },
        storeSearchText({ commit }, { searchText }) {
            commit('setSearchText', searchText)
        }
    }
})