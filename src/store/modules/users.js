import Vue from 'vue'

const state = {
  users: [],
  page: 1,
  total_users: 0
};

const getters = {
  users: state => {
    return state.users;
  },
  page: state => {
    return state.page;
  },
  total_users: state=>{
      return state.total_users
  }
};
const mutations = {
  SET_USERS(state, users) {
    state.users = [...state.users, ...users];
    state.users.sort((a, b) =>{
        if(a.registration_timestamp < b.registration_timestamp){
            return 1
        }
        if(a.registration_timestamp > b.registration_timestamp){
            return -1
        }
        return 0
    })
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_TOTAL_USERS(state, total_users){
      state.total_users = total_users
  },
  INCREASE_PAGE(state){
        state.page++
  }
}



const actions = {
  fetchUsers: ({ commit }) => {
    Vue.http
      .get(`users?page=${state.page}&count=6`)
      .then(response => response.json())
      .then(users => {
        commit("SET_USERS", users.users);
        commit("SET_TOTAL_USERS", users.total_users)
      });         
  },
  increasePage:({commit})=>{
      commit("INCREASE_PAGE")      
  }
};



export default {
  state,
  getters,
  mutations,
  actions
};
