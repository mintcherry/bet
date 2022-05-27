<template>
  <div class="events-container">
    <EventRow
      v-for="event of events"
      :key="event.tournament_id"
      :event="event"
    />
  </div>
</template>

<script>
import EventRow from '@/components/Index/Events/EventRow';

export default {
  name: 'EventsContainer',
  components: {
    EventRow,
  },

  props: {
    events: Array,
  },
}
</script>

<style lang="scss" scoped>
.events-container {
  max-width: 700px;
  width: 100%;
  margin: 100px auto 0;
}
</style>
