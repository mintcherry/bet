<template>
  <div class="coupon-container">
    <template v-if="coupons.length">
      <CouponItem
          v-for="coupon of coupons"
          :key="coupon.id"
          :coupon="coupon"
      />
    </template>
    <template v-else>
      <div class="coupon-container__empty">
        Выберите событие из списка <br> ставок
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CouponItem from '@/components/Asides/Right/Coupon/CouponItem';

export default {
  name: 'CouponContainer',
  components: {
    CouponItem,
  },
  
  computed: {
    ...mapState('coupons', [
      'coupons',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.coupon-container__empty {
  @include font(16px, 20px, 400, $white);
  font-family: 'Calibri', sans-serif;
  text-align: center;
  opacity: .5;
}
</style>
