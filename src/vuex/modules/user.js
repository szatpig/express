import { USER_TOKEN } from "../types";

const state = {
  userToken:'',
  codeKey:'',
  ticket:''
};

const getters = {};

const mutations = {
  [USER_TOKEN](state,token){
    state.userToken = token.userToken;
    state.codeKey = token.codeKey;
    state.ticket = token.ticket;
  }
};

const actions = {
  userToken({commit},token){
    sessionStorage.setItem('userToken',token);
    commit(USER_TOKEN,token)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
