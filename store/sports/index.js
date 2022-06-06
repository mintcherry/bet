import { getSports } from '@/requestManager/sports';

import { API_STATUS } from '@/utils/apiParams';

export const state = () => ({
  sports: [],
})

export const getters = {}

export const mutations = {
  SET_SPORTS(state, sports) {
    state.sports = sports;
  },
}

export const actions = {
  async fetchSports({ commit }, mode) {
    try {
      const response = await getSports(mode);

      if (response.data.status === API_STATUS.SUCCESS) {
        commit('SET_SPORTS', response.data.body);
      }

      return response;
    } catch (e) {
      console.error(e);
    }
  },
}
