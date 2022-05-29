import { getEvents } from '@/requestManager/events';

import { API_STATUS } from '@/utils/apiParams';

export const state = () => ({
  events: [],
})

export const getters = {}

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
}

export const actions = {
  async fetchEvents({ commit }, params) {
    try {
      const response = await getEvents(
        params.SPORT_ID,
        params.TOURNAMENT_ID,
        params.API_MODE,
        params.COUNT,
      );

      if (response.data.status === API_STATUS.SUCCESS) {
        commit('SET_EVENTS', response.data.body);
      }

      return response;
    } catch
      (e) {
      console.error(e);
    }
  },
}