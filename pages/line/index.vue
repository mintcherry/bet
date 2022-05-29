<template>
  <div class="line-page">
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
  API_MODE: API_MODE.LINE,
  COUNT: 5000,
}

export default {
  name: 'LinePage',
  components: {
    SliderContainer,
    EventsContainer,
  },

  async fetch({store}) {
    await store.dispatch('events/fetchEvents', DEFAULT_REQUEST_PARAMS);
  },
  computed: {
    ...mapState('events', [
      'events',
    ]),
  },
}
</script>
