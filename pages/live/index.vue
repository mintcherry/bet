<template>
  <div class="live-page">
    <SliderContainer />
    <EventsContainer :events="events" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import SliderContainer from '@/components/System/Slider/SliderContainer';
import EventsContainer from '@/components/Events/EventsContainer';

import { API_MODE } from '@/utils/apiParams';

const DEFAULT_REQUEST_PARAMS = {
  SPORT_ID: 0,
  TOURNAMENT_ID: 0,
  API_MODE: API_MODE.LIVE,
  COUNT: 500,
}

export default {
  name: 'LivePage',
  components: {
    SliderContainer,
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
}
</script>
