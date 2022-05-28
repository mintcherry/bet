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

export default {
  name: 'LinePage',
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

<style lang="scss" scoped>

</style>