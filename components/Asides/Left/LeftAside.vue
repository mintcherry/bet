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
  padding: 10px;
  background: #05142C;
  box-sizing: border-box;
}

.left-side__title {
  @include font(16px, 20px, 600, $white);
  margin-bottom: 10px;
}
</style>
