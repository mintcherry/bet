<template>
  <div class="game-layout">
    <TheHeader />
    
    <TheNavigation />
    
    <div class="game-layout__content">
      <LeftAside />
      
      <main class="game-layout__main">
        <nuxt />
      </main>
      
      <RightAside />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

import SliderContainer from '@/components/System/Slider/SliderContainer';

import TheHeader from '@/components/System/Header/TheHeader';
import TheNavigation from '@/components/System/Navigation/TheNavigation';
import LeftAside from '@/components/Asides/Left/LeftAside';
import RightAside from '@/components/Asides/Right/RightAside';

import { API_MODE } from '@/utils/apiParams';

export default {
  name: 'GameLayout',
  components: {
    SliderContainer,
    TheHeader,
    TheNavigation,
    LeftAside,
    RightAside,
  },
  
  async created() {
    await this.fetchSports(API_MODE.LIVE);
    this.SET_ALL_SELECTED_COUPON(this.$cookies.get('coupons'));
  },
  
  methods: {
    ...mapMutations('coupons', [
      'SET_ALL_SELECTED_COUPON',
    ]),
    ...mapActions('sports', [
      'fetchSports',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.game-layout {
  width: 100%;
  margin: 0 auto;
}

.game-layout__content {
  @include flexBetween;
  align-items: flex-start;
  max-width: 1400px;
  width: 100%;
  margin: 20px auto 0;
}

.game-layout__main {
  max-width: 890px;
  width: 100%;
  margin: 0 20px;
}
</style>
