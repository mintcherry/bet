<template>
  <aside class="right-side">
    <Coupon />
  </aside>
</template>

<script>
import Coupon from '@/components/Asides/Right/Coupon/Coupon';

export default {
  name: 'RightAside',
  components: {
    Coupon,
  },
}
</script>

<style lang="scss" scoped>
.right-side {
  min-width: 200px;
  background: #05142C;
}
</style>
