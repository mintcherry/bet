<template>
  <div class="event-game">
    <div class="event-game__column-date">
      <span>{{ gameDayStart }} {{ gameMonthStart }}</span>
      <span>{{ gameTimeStart }}</span>

      <!--      {{ game.game_start }}-->
    </div>
    <div class="event-game__column-teams">
      {{ firstTeam }} - {{ secondTeam }}
    </div>
    <div class="event-game__column">
      {{ ratioFirstTeam }}
    </div>
    <div class="event-game__column">
      {{ ratioDraw }}
    </div>
    <div class="event-game__column">
      {{ ratioSecondTeam }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventGame',

  props: {
    game: Object,
  },
  computed: {
    gameDayStart() {
      return this.$dayjs(this.game.game_start).locale('ru').format('DD');
    },
    gameMonthStart() {
      let month = this.$dayjs(this.game.game_start).locale('ru').format('MMM').replace('.', '');
      month = month[0].toUpperCase() + month.slice(1);

      return month;
    },
    gameTimeStart() {
      return this.$dayjs(this.game.game_start).locale('ru').format('HH:MM').replace('.', '');
    },

    firstTeam() {
      return this.game.opp_1_name;
    },
    secondTeam() {
      return this.game.opp_2_name;
    },

    ratioFirstTeam() {
      return this.game?.game_oc_list[0]?.oc_rate;
    },
    ratioDraw() {
      return this.game?.game_oc_list[1]?.oc_rate;
    },
    ratioSecondTeam() {
      return this.game?.game_oc_list[2]?.oc_rate;
    },
  },
}
</script>

<style lang="scss" scoped>
.event-game {
  display: flex;
  align-content: center;
  background: $white;
  padding: 10px;
  margin-bottom: 5px;
}

.event-game__column-date {
  @include font(14px, 18px, 500, #000);
  display: flex;
  flex-direction: column;
  width: 50px;
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

.event-game__column-teams {
  @include font(14px, 16px, 500, #000);
  display: flex;
  align-items: center;
  width: 500px;
  margin-left: 10px;
}

.event-game__column {
  @include font(14px, 16px, 500, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}
</style>