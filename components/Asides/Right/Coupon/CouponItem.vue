<template>
  <div class="coupon-item">
    <div class="coupon-item__top">
      <div class="coupon-item__title">
        {{ coupon.opponents }}
      </div>
      <VIcon
          name="CloseIcon"
          :width="15"
          :height="15"
          class="coupon-item__remove"
          @click="removeCoupon(coupon.id)"
      />
    </div>
    <div class="coupon-item__bottom">
      <div class="coupon-item__type">
        {{ coupon.type }}
      </div>
      <div class="coupon-item__value">
        {{ coupon.bet }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import VIcon from '@/components/UI/VIcon';

export default {
  name: 'CouponItem',
  components: {
    VIcon,
  },
  
  props: {
    coupon: Object,
  },
  
  methods: {
    ...mapMutations('coupons', [
      'REMOVE_COUPON',
    ]),
    
    removeCoupon(id) {
      this.REMOVE_COUPON(id);
    },
  },
}
</script>

<style lang="scss" scoped>
.coupon-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 5px 10px;
  background: $white;
  border-radius: 5px;
}

.coupon-item__top {
  @include flexBetween;
  margin-bottom: 5px;
}

.coupon-item__title {
  @include font(12px, 14px, 400, $black);
  margin-right: 10px;
}

.coupon-item__remove {
  cursor: pointer;
  padding: 2px;
}

.coupon-item__bottom {
  @include flexBetween;
  align-items: center;
}

.coupon-item__type {
  @include font(12px, 14px, 400, $black);
}

.coupon-item__value {
  @include font(12px, 14px, 400, $black);
}
</style>
