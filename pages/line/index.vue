<template>
  <div class="line-page">
    <EventsContainer :events="events" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EventsContainer from '@/components/Events/EventsContainer';

import { API_MODE } from '@/utils/apiParams';

const DEFAULT_REQUEST_PARAMS = {
  SPORT_ID: 0,
  TOURNAMENT_ID: 0,
  API_MODE: API_MODE.LINE,
  COUNT: 3000,
}

export default {
  name: 'LinePage',
  layout: 'EventLayout',
  components: {
    EventsContainer,
  },
  
  async fetch({ store }) {
    await store.dispatch('events/fetchEvents', DEFAULT_REQUEST_PARAMS);
  },
  computed: {
    ...mapState('events', [
      'events',
    ]),
  },
  
  head() {
    return {
      title: 'Лайн матчи'
    }
  },
}
</script>
