<template>
  <div class="casino-layout">
    <TheHeader />
    
    <TheNavigation />
    
    <div class="casino-layout__content">
      <LeftAside />
      
      <main class="casino-layout__main">
        <nuxt />
      </main>
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
  name: 'CasinoLayout',
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
.casino-layout {
  width: 100%;
  margin: 0 auto;
}

.casino-layout__content {
  @include flexBetween;
  align-items: flex-start;
  max-width: 1400px;
  width: 100%;
  margin: 20px auto 0;
}

.casino-layout__main {
  max-width: 1240px;
  width: 100%;
  margin: 0 20px;
}
</style>
