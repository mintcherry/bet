// import { getSports } from '@/requestManager/sports';
//
// import { API_MODE, API_STATUS, DATA_TYPE } from '@/utils/apiParams';
//
// export const state = () => ({
//   sports: [],
// })
//
// export const getters = {}
//
// export const mutations = {
//   SET_SPORTS(state, sports) {
//     state.sports = sports;
//   },
// }
//
// export const actions = {
//   async nuxtServerInit({ commit }) {
//     try {
//       const response = await getSports(DATA_TYPE.SPORT, API_MODE.LIVE);
//
//       if (response.data.status === API_STATUS.SUCCESS) {
//         commit('sports/SET_SPORTS', response.data.body);
//       }
//
//       return response;
//     } catch
//       (e) {
//       console.error(e);
//     }
//   },
// }
