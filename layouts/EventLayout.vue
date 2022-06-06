<template>
  <div class="event-layout">
    <TheHeader />
    
    <TheNavigation />
    
    <div class="event-layout__content">
      <LeftAside />
      
      <main class="event-layout__main">
        <SliderContainer />
        
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
  name: 'EventLayout',
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
.event-layout {
  width: 100%;
}

.event-layout__content {
  @include flexBetween;
  align-items: flex-start;
  width: 90%;
  margin: 20px auto 0;
}

.event-layout__main {
  margin: 0 20px;
}
</style>
