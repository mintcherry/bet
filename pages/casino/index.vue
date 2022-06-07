<template>
  <div class="casino-page">
    <CasinoContainer />
  </div>
</template>

<script>
import CasinoContainer from '@/components/Casino/CasinoContainer';

export default {
  name: 'CasinoPage',
  layout: 'CasinoLayout',
  
  components: {
    CasinoContainer,
  },
  
  head() {
    return {
      title: 'Казино',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
