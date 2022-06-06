<template>
  <div v-if="isShownRow" class="event-row">
    <div class="event-row__panel" @click="isOpened = !isOpened">
      <nuxt-link :to="tournamentLink" class="event-row__name">
        {{ event.tournament_name }}
      </nuxt-link>
      
      <ArrowDown
          :class="[
          'event-row__arrow-icon',
          { 'active': isOpened }
        ]"
      />
    </div>
    
    <VueSlideToggle :open="isOpened" :duration="500">
      <div class="event-row__body">
        <EventListHeader />
        
        <EventList
            :events="availableEvents"
        />
      </div>
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

import EventListHeader from '@/components/Events/List/EventListHeader';
import EventList from '@/components/Events/List/EventList';

import ArrowDown from 'assets/svg/arrow-down.svg?inline';

import { API_MODE } from "@/utils/apiParams";

export default {
  name: 'EventRow',
  components: {
    EventList,
    VueSlideToggle,
    EventListHeader,
    ArrowDown,
  },
  
  props: {
    event: Object,
  },
  data: () => ({
    isOpened: true,
  }),
  computed: {
    tournamentLink() {
      let sport = this.availableEvents[0].sport_name_en.toLowerCase();
      let sportId = this.availableEvents[0].sport_id;
      let routeName = '';
      
      if (this.$route.name.includes(API_MODE.LINE)) {
        routeName = API_MODE.LINE;
      } else
        if (this.$route.name.includes(API_MODE.LIVE)) {
          routeName = API_MODE.LIVE;
        } else {
          routeName = API_MODE.LINE;
        }
      
      return '/' + routeName + '/' + sport + `?id=${sportId}` + '/' + this.event.tournament_name.replace(/ /g, '');
    },
    availableEvents() {
      return this.event.events_list;
    },
    
    isShownRow() {
      return this.availableEvents.every(game => game.game_oc_list.length > 3);
    },
  },
}
</script>

<style lang="scss" scoped>
.event-row {
  margin-bottom: 20px;
}

.event-row__panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: $bard;
  cursor: pointer;
}

.event-row__name {
  @include font(18px, 24px, 600, $white);
}

.event-row__arrow-icon {
  width: 25px;
  height: 25px;
  transition: 500ms;
  
  &.active {
    transform: rotate(180deg);
  }
}
</style>
