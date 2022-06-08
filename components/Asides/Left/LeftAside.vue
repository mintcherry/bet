<template>
  <aside class="left-side">
    <div class="left-side__title">
      Виды спорта
    </div>
    
    <LeftAsideList :sports="sports" />
  </aside>
</template>

<script>
import { mapState } from 'vuex';

import LeftAsideList from '@/components/Asides/Left/List/LeftAsideList';

export default {
  name: 'LeftAside',
  components: {
    LeftAsideList,
  },
  
  computed: {
    ...mapState('sports', [
      'sports',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.left-side {
  min-width: 200px;
  height: auto;
  background: #05142C;
  box-sizing: border-box;
}

.left-side__title {
  @include font(16px, 20px, 600, $white);
  padding: 7px 5px 7px 15px;
}
</style>
