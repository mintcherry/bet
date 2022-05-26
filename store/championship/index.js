import { getChampionship } from '@/requestManager/championship';

import { API_STATUS, API_MODE } from '@/utils/apiParams';

export const state = () => ({
  championships: [],
})

export const getters = {}

export const mutations = {
  SET_CHAMPIONSHIPS(state, championships) {
    state.championships = championships;
  },
}

export const actions = {
  async fetchChampionships({ commit }, sportId = 0, countryId = 0, apiMode = API_MODE.LIVE) {
    try {
      const response = await getChampionship(sportId, countryId, apiMode);

      if (response.status === API_STATUS.SUCCESS) {
        commit('SET_CHAMPIONSHIPS', response.data.body);
      }

      return response;
    } catch (e) {
      console.error(e);
    }
  },
}