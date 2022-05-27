<template>
  <div class="event-list">
    <EventListItem
      v-for="game of availableEvents"
      :key="game.game_id"
      :game="game"
    />
  </div>
</template>

<script>
import EventListItem from '@/components/Index/Events/List/EventListItem';

export default {
  name: 'EventList',
  components: {
    EventListItem,
  },

  props: {
    events: Array,
  },
  computed: {
    availableEvents() {
      let availableEvents = [];

      this.events.forEach(event => {
        if (event.game_oc_list.length >= 3) {
          availableEvents.push(event);
        }
      })

      return availableEvents;
    },
  },
}
</script>
