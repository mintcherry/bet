<template>
  <div class="events-container">
    <template v-if="events.length">
      <EventRow
          v-for="event of events"
          :key="event.tournament_id"
          :event="event"
      />
    </template>
    <div class="events-container__empty">
      Ставки не принмимаются
    </div>
  </div>
</template>

<script>
import EventRow from '@/components/Events/EventRow';

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
  max-width: 890px;
  width: 100%;
  margin: 100px auto 0;
}

.events-container__empty {
  @include flexCenter;
  @include font(26px, 32px, 600, $black);
  font-family: 'Calibri', sans-serif;
}
</style>
