/**
 * Created by szatpig on 2018/2/9.
 */
import * as _ from '@/utils/util'
import { LOADING_SHOW,TOAST_SHOW } from '../types';

const state = {
   loading:false,
   toast:false,
};

const getters ={
  loading: state => state.loading,
  toast: state => state.toast
};

const mutations = {
  [LOADING_SHOW](state,res){
    state.loading = res;
  },
  [TOAST_SHOW](state,res){
    state.loading = res;
  }
};

const actions = {
  loadShow({ commit }, res){
    commit(LOADING_SHOW,res)
  },
  toastShow({ commit }, res){
    commit(LOADING_SHOW,res)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
