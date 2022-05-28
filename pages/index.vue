<template>
  <div class="index-page">
    <SliderContainer />
    <EventsContainer :events="events" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import SliderContainer from '@/components/Index/Slider/SliderContainer';
import EventsContainer from '@/components/Index/Events/EventsContainer';

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    SliderContainer,
    EventsContainer,
  },

  async fetch({store}) {
    await store.dispatch('events/fetchEvents');
  },
  computed: {
    ...mapState('events', [
      'events',
    ]),
  },
}
</script>

