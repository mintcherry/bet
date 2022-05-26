<template>
  <div class="index-page">
    <EventsContainer
      :events="events"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EventsContainer from '@/components/Index/EventsContainer';

export default {
  name: 'IndexPage',
  components: {
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
