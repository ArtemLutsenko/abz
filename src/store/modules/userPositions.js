import Vue from 'vue'

const state = {
    positions:[]
};

const getters = {
    positions: state => {
    return state.positions;
  },
};
const mutations = {
  SET_POSITIONS(state, positions) {
    state.positions = positions
  }
}
const actions = {
    fetchUserPositions: ({ commit }) => {
      Vue.http
        .get(`positions`)
        .then(response => response.json())
        .then(position => {
          commit("SET_POSITIONS", position.positions);
        });         
    },
  };
  
  
  
  export default {
    state,
    getters,
    mutations,
    actions
  };