<template>
  <div class="coupon">
    <CouponContainer />
    
    <CouponInfo />
    
    <VButton
        v-if="createBtnIsShown"
        :type="V_BUTTON.BARD"
        class="coupon__create-bet"
    >
      Сделать ставку
    </VButton>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CouponContainer from '@/components/Asides/Right/Coupon/CouponContainer';
import CouponInfo from '@/components/Asides/Right/Coupon/CouponInfo';
import VButton from '@/components/UI/VButton';

import { V_BUTTON } from '@/utils/UI';

export default {
  name: 'Coupon',
  components: {
    VButton,
    CouponContainer,
    CouponInfo,
  },
  
  data: () => ({
    V_BUTTON,
  }),
  computed: {
    ...mapState('coupons', [
      'coupons',
    ]),
    
    createBtnIsShown() {
      return Boolean(this.coupons.length);
    },
  },
}
</script>

<style lang="scss" scoped>
.coupon {
  margin-bottom: 20px;
  padding: 10px;
  background: #05142C;
  box-sizing: border-box;
}

.coupon__create-bet {
  width: 100%;
  height: 35px;
}
</style>
