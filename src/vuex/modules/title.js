
import { CHANGE_TITLE,SHOW_TOAST ,HIDE_TOAST} from '../types';

const state = {
    title:'',
    toast:'',
    toastShow:false
};

const getters = {

};

const mutations = {
  [CHANGE_TITLE](state,title){
    state.title = title;
  },
  [SHOW_TOAST](state,toast){
    state.toast = toast;
    state.toastShow = true;
  },
  [HIDE_TOAST](state){
      state.toastShow = false;
  }
};

const actions = {
  changeTitle({commit},title){
    commit(CHANGE_TITLE,title);
  },
  changeToast({commit},taost){
    commit(SHOW_TOAST,taost);
  },
  hideToast({commit}){
      commit(HIDE_TOAST);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
