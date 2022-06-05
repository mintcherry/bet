<template>
  <div class="default-layout">
    <TheHeader />
    
    <TheNavigation />
    
    <div class="default-wrapper__content">
      <LeftAside />
      
      <main class="default-wrapper__main">
        <nuxt />
      </main>
      
      <RightAside />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import TheHeader from '@/components/System/Header/TheHeader';
import TheNavigation from '@/components/System/Navigation/TheNavigation';
import LeftAside from '@/components/Asides/Left/LeftAside';
import RightAside from '@/components/Asides/Right/RightAside';

import { API_MODE } from '@/utils/apiParams';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheNavigation,
    LeftAside,
    RightAside,
  },
  
  async created() {
    await this.fetchSports(API_MODE.LIVE);
  },
  
  methods: {
    ...mapActions('sports', [
      'fetchSports',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
}

.default-wrapper__content {
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 20px auto 0;
}

.default-wrapper__main {
  margin: 0 20px;
}
</style>
