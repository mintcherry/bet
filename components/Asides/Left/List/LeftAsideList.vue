<template>
  <div class="left-aside-list">
    <LeftAsideItem
        v-for="sport of sports"
        :key="sport.id"
        :sport="sport"
    />
  </div>
</template>

<script>
import LeftAsideItem from '@/components/Asides/Left/List/LeftAsideItem';

export default {
  name: 'LeftAsideList',
  components: {
    LeftAsideItem,
  },
  
  props: {
    sports: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>
