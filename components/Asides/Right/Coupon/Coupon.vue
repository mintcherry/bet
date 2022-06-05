<template>
  <div class="coupon">
    <CouponContainer />
    
    <CouponInfo />
  </div>
</template>

<script>
import CouponContainer from '@/components/Asides/Right/Coupon/CouponContainer';
import CouponInfo from '@/components/Asides/Right/Coupon/CouponInfo';

export default {
  name: 'Coupon',
  components: {
    CouponContainer,
    CouponInfo,
  },
}
</script>

<style lang="scss" scoped>
.coupon {
  padding: 10px;
}
</style>
