<template>
  <div class="event-list-item">
    <div class="event-list-item__column">
      <span>{{ gameDayStart }} {{ gameMonthStart }}</span>
      <span>{{ gameTimeStart }}</span>
    </div>
    <div class="event-list-item__column">
      <nuxt-link
          :to="{
              path: gameLink,
              query: {
                gameId: getGameId,
              },
            }"
          class="event-list-item__link"
      >
        {{ opponents }}
      </nuxt-link>
    </div>
    <div
        :class="[
            'event-list-item__column',
            { 'selected-bet': selected === RATIO_LABEL.P1 },
        ]"
        @click="selectCoupon(ratioFirstTeam, RATIO_LABEL.P1)"
    >
      <span>{{ ratioFirstTeam }}</span>
    </div>
    <div
        :class="[
            'event-list-item__column',
            { 'selected-bet': selected === RATIO_LABEL.X },
        ]"
        @click="selectCoupon(ratioDraw, RATIO_LABEL.X)"
    >
      <span>{{ ratioDraw }}</span>
    </div>
    <div
        :class="[
            'event-list-item__column',
            { 'selected-bet': selected === RATIO_LABEL.P2 },
        ]"
        @click="selectCoupon(ratioSecondTeam, RATIO_LABEL.P2)"
    >
      <span>{{ ratioSecondTeam }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { API_MODE } from "@/utils/apiParams";

const RATIO_LABEL = {
  P1: 'П1',
  X: 'X',
  P2: 'П2',
}

export default {
  name: 'EventListItem',
  
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    RATIO_LABEL,
    selected: String,
  }),
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
    
    opponents() {
      return this.game.opp_1_name + ' - ' + this.game.opp_2_name;
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
    
    gameLink() {
      let routeName = '';
      let sport = this.game.sport_name_en.toLowerCase();
      let tournament = this.game.tournament_name_en.replace(/\s/g, '');
      let game = this.game.opp_1_name_en + this.game.opp_2_name_en;
      
      if (this.$route.name.includes(API_MODE.LINE)) {
        routeName = API_MODE.LINE;
      } else
        if (this.$route.name.includes(API_MODE.LIVE)) {
          routeName = API_MODE.LIVE;
        } else {
          routeName = API_MODE.LINE;
        }
      
      return '/' + routeName + '/' + sport + '/' + tournament + '/' + game;
    },
    getGameId() {
      return this.game.game_id;
    },
  },
  
  methods: {
    ...mapMutations('coupons', [
      'SET_COUPON',
    ]),
    
    selectCoupon(bet, type) {
      const selectedBet = {
        id: this.game.game_id,
        opponents: this.opponents,
        bet: bet,
        type: type,
      };
      
      this.selected = type;
      
      this.SET_COUPON(selectedBet);
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
  
  &:not(:last-child) {
    margin-bottom: 5px;
  }
}

.event-list-item__column {
  display: flex;
  width: 60px;
  
  &:nth-of-type(1) {
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
  
  &:nth-of-type(2) {
    @include font(14px, 16px, 500, #000);
    display: flex;
    align-items: center;
    width: 660px;
    margin: 0 20px 0 10px;
    
    .event-list-item__link {
      display: block;
      position: relative;
      
      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: $black;
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: 250ms;
      }
      
      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }
  }
  
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5) {
    justify-content: center;
    align-items: center;
    
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
  
  &.selected-bet {
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5) {
      span {
        background: $bard;
        color: $white;
      }
    }
  }
}
</style>
