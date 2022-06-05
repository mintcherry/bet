<template>
  <aside class="right-side">
    <Coupon />
    
    <Support />
    
    <Advertisement />
  </aside>
</template>

<script>
import Coupon from '@/components/Asides/Right/Coupon/Coupon';
import Support from '@/components/Asides/Right/Support/Support';
import Advertisement from '@/components/Asides/Right/Advertisement/Advertisement';

export default {
  name: 'RightAside',
  components: {
    Coupon,
    Support,
    Advertisement,
  },
}
</script>

<style lang="scss" scoped>
.right-side {
  min-width: 230px;
  max-width: 230px;
  width: 100%;
}
</style>
