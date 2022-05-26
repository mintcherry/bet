<template>
  <div class="event-row">
    <div
      class="event-row__title"
      @click="isOpened = !isOpened"
    >
      <div class="event-row__name">
        {{ event.tournament_name }}
      </div>

      <ArrowDown
        :class="[
          'event-row__arrow-icon',
          { 'active': isOpened }
        ]"
      />
    </div>

    <VueSlideToggle :open="isOpened" :duration="500">
      <div class="event-row__body">
        <div class="event-row__body-top">
          <div
            v-for="(label, i) of topLabels"
            :key="i"
            class="event-row__body-top__label"
          >
            {{ label }}
          </div>
        </div>

        <div class="event-row__body-games">
          <EventGame
            v-for="(game, i) of liveEvents"
            :key="i"
            :game="game"
          />
        </div>
      </div>
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

import EventGame from '@/components/Index/EventGame';

import ArrowDown from '@/assets/svg/arrow-down.svg?inline'

export default {
  name: 'EventRow',
  components: {
    VueSlideToggle,
    EventGame,
    ArrowDown,
  },

  props: {
    event: Object,
  },
  data: () => ({
    isOpened: false,
  }),
  computed: {
    liveEvents() {
      return this.event.events_list;
    },
    topLabels() {
      return ['Матч', 'П1', 'X', 'П2'];
    },
  },
}
</script>

<style lang="scss" scoped>
.event-row {
  margin-bottom: 20px;
}

.event-row__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #B01A24;
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

.event-row__body-top {
  display: flex;
  background: #05142C;
  padding: 10px;
}

.event-row__body-top__label {
  @include font(12px, 14px, 600, $white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;

  &:nth-of-type(1) {
    justify-content: flex-start;
    max-width: 550px;
    min-width: 150px;
    width: 100%;
  }
}
</style>