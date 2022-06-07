<template>
  <div class="tournament-page">
    <EventsContainer :events="eventsByTournament" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EventsContainer from '@/components/Events/EventsContainer';

import { API_MODE } from "@/utils/apiParams";

export default {
  name: 'TournamentPage',
  layout: 'EventLayout',
  components: {
    EventsContainer,
  },
  
  async asyncData({ store, route }) {
    let requestParams = {
      sportId: route.query.sportId,
      tournamentId: route.query.tournamentId,
      mode: null,
    }
    
    route.name.includes(API_MODE.LIVE)
        ? requestParams.mode = API_MODE.LIVE
        : requestParams.mode = API_MODE.LINE
    
    await store.dispatch('events/fetchEventsByTournament', requestParams);
  },
  computed: {
    ...mapState('events', [
      'eventsByTournament',
    ]),
  },
}
</script>
