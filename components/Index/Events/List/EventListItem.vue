<template>
  <div class="event-list-item">
    <div class="event-list-item__column-date">
      <span>{{ gameDayStart }} {{ gameMonthStart }}</span>
      <span>{{ gameTimeStart }}</span>
    </div>
    <div class="event-list-item__column-teams">
      {{ firstTeam }} - {{ secondTeam }}
    </div>
    <div class="event-list-item__column">
      <span>{{ ratioFirstTeam }}</span>
    </div>
    <div class="event-list-item__column">
      <span>{{ ratioDraw }}</span>
    </div>
    <div class="event-list-item__column">
      <span>{{ ratioSecondTeam }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventListItem',

  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    gameDayStart() {
      return this.$dayjs.unix(this.game.game_start).locale('ru').format('DD');
    },
    gameMonthStart() {
      let month = this.$dayjs.unix(this.game.game_start).locale('ru').format('MMM').replace('.', '');
      month = month[0].toUpperCase() + month.slice(1);

      return month;
    },
    gameTimeStart() {
      return this.$dayjs.unix(this.game.game_start).locale('ru').format('HH:MM').replace('.', '');
    },

    firstTeam() {
      return this.game.opp_1_name;
    },
    secondTeam() {
      return this.game.opp_2_name;
    },

    ratioFirstTeam() {
      return this.game.game_oc_list[0].oc_rate;
    },
    ratioDraw() {
      return this.game.game_oc_list[1].oc_rate;
    },
    ratioSecondTeam() {
      return this.game.game_oc_list[2].oc_rate;
    },
  },
}
</script>

<style lang="scss" scoped>
.event-list-item {
  display: flex;
  align-content: center;
  background: $white;
  padding: 10px;
  margin-bottom: 5px;
}

.event-list-item__column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;

  span {
    @include font(14px, 16px, 500, #000);
    display: inline-block;
    background: #ececec;
    border-radius: 150px;
    padding: 5px 10px;
    cursor: pointer;
    transition: 250ms;

    &:hover {
      color: $white;
      background: $bard;
    }
  }
}

.event-list-item__column-teams {
  @include font(14px, 16px, 500, #000);
  display: flex;
  align-items: center;
  width: 660px;
  margin-left: 10px;
}

.event-list-item__column-date {
  @include font(14px, 18px, 500, #000);
  display: flex;
  flex-direction: column;
  width: 60px;
  position: relative;

  span:last-child {
    font-weight: bold;
  }

  &:after {
    content: '';
    display: block;
    width: 1.5px;
    height: 100%;
    background: #B01A24;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
