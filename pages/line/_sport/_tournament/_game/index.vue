<template>
  <div v-if="gameIsAvailable" class="game-page">
  
  </div>
  <div v-else class="game-page__empty">
    Событие не доступно
  </div>
</template>

<script>
import { API_MODE, API_TOKEN } from '@/utils/apiParams';

export default {
  name: 'GamePage',
  layout: 'EventLayout',
  
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
  }
}
</script>

<style lang="scss" scoped>
.game-page__empty {
  @include flexCenter;
  @include font(24px, 30px, 600, $black);
  margin-top: 50px;
}
</style>
