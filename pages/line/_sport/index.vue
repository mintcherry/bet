<template>
  <div class="sport-page">
    <EventsContainer :events="eventsBySport" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EventsContainer from '@/components/Events/EventsContainer';

import { API_MODE } from '@/utils/apiParams';

export default {
  name: 'SportPage',
  layout: 'EventLayout',
  components: {
    EventsContainer,
  },
  
  async asyncData({ store, route }) {
    let requestParams = {
      mode: null,
      sportId: route.query.id,
    }
    
    route.name.includes(API_MODE.LIVE)
        ? requestParams.mode = API_MODE.LIVE
        : requestParams.mode = API_MODE.LINE
    
    await store.dispatch('events/fetchEventsBySport', requestParams);
  },
  computed: {
    ...mapState('events', [
      'eventsBySport',
    ]),
  },
}
</script>
