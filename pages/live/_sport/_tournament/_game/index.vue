<template>
  <div v-if="gameIsAvailable" class="game-page">
    <Information
        :opponents="opponents"
        :date="date"
        :tournament="tournament"
    />
    
    <div class="game-page__bets">
      <BetList
          v-for="betList of availableBets"
          :key="betList.group_id"
          :betList="betList"
      />
    </div>
  
  </div>
  <div v-else class="game-page__empty">
    Событие не доступно
  </div>
</template>

<script>
import Information from '@/components/Game/Information';
import BetList from '@/components/Game/Bets/BetList';

import { API_MODE, API_TOKEN } from '@/utils/apiParams';

export default {
  name: 'GamePage',
  layout: 'GameLayout',
  components: {
    Information,
    BetList,
  },
  
  async asyncData({ $axios, route }) {
    let params = {
      id: route.query.gameId,
      mode: null,
    }
    
    route.name.includes(API_MODE.LIVE)
        ? params.mode = API_MODE.LIVE
        : params.mode = API_MODE.LINE
    
    try {
      const response = await $axios.get(`/event/${params.id}/sub/${params.mode}/ru`, {
        headers: {
          'Package': API_TOKEN,
        },
      });
      
      return {
        event: response.data.body,
      }
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    gameIsAvailable() {
      return this.event !== undefined;
    },
    opponents() {
      return this.event.opp_1_name + ' - ' + this.event.opp_2_name;
    },
    date() {
      return this.event.game_start;
    },
    tournament() {
      return this.event.tournament_name;
    },
    availableBets() {
      return this.event.game_oc_list;
    },
  },
}
</script>

<style lang="scss" scoped>
.game-page {
  padding-bottom: 100px;
}

.game-page__bets {
  column-count: 2;
  margin-top: 15px;
}

.game-page__empty {
  @include flexCenter;
  @include font(24px, 30px, 600, $black);
  margin-top: 50px;
}
</style>
