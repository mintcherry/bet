import { getEvents } from '@/requestManager/events';

import { API_STATUS, API_MODE } from '@/utils/apiParams';

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
  async fetchEvents({ commit }, sportId = 0, tournamentId = 0, apiMode = API_MODE.LIVE, count = 350) {
    try {
      const response = await getEvents(sportId, tournamentId, count, apiMode);

      if (response.status === API_STATUS.SUCCESS) {
        commit('SET_EVENTS', response.data.body);
      }

      return response;
    } catch
      (e) {
      console.error(e);
    }
  }
  ,
}