import { getEvents, getEventsBySport } from '@/requestManager/events';

import { API_STATUS } from '@/utils/apiParams';

export const state = () => ({
  events: [],
  eventsBySport: [],
})

export const getters = {}

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_BY_SPORT(state, events) {
    state.eventsBySport = events;
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
  async fetchEventsBySport({ commit }, requestParams) {
    const REQUEST_PARAMS = {
      sportId: requestParams.sportId,
      count: 3000,
      apiMode: requestParams.mode,
    }

    try {
      const response = await getEventsBySport(REQUEST_PARAMS);

      if (response.data.status === API_STATUS.SUCCESS) {
        commit('SET_EVENTS_BY_SPORT', response.data.body);
      }

      return response;
    } catch
      (e) {
      console.error(e);
    }
  },
}
