<template>
  <div class="coupon-info">
    <div class="coupon-info__row">
      <div class="coupon-info__label">Коэфф:</div>
      
      <div class="coupon-info__value">
        {{ totalRatio }}
      </div>
    </div>
    <div class="coupon-info__row">
      <div class="coupon-info__label">Выигрыш:</div>
      
      <div class="coupon-info__value">
        {{ totalWinning }}
      </div>
    </div>
    <div class="coupon-info__row">
      <div class="coupon-info__label">Сумма:</div>
      
      <VInput
          v-model="amount"
          :isDisabled="amountInputIsDisabled"
          type="number"
          class="coupon-info__value"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import VInput from '@/components/UI/VInput';

export default {
  name: 'CouponInfo',
  components: {
    VInput,
  },
  
  data: () => ({
    amount: 100,
  }),
  computed: {
    ...mapState('coupons', [
      'coupons',
    ]),
    
    totalRatio() {
      let totalRatio = 0.00;
      
      this.coupons.forEach(coupon => {
        totalRatio += coupon.bet;
      });
      
      return totalRatio.toFixed(2);
    },
    totalWinning() {
      if (this.amount.length === 0) {
        return '0.00';
      }
      
      return this.totalRatio !== '0.00'
          ? this.amount * this.totalRatio
          : '0.00';
    },
    amountInputIsDisabled() {
      return Boolean(this.coupons.length);
    },
  },
}
</script>

<style lang="scss" scoped>
.coupon-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.coupon-info__row {
  @include flexBetween;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  
  &:nth-of-type(3) {
    .v-input.coupon-info__value {
      width: 100px;
      padding: 0;
      
      ::v-deep .v-input__input {
        width: 100%;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}

.coupon-info__label {
  @include font(14px, 18px, 400, $white);
}

.coupon-info__value {
  @include flexCenter;
  @include font(14px, 18px, 400, $white);
  min-width: 30px;
  max-width: 120px;
  height: 30px;
  padding: 5px 10px;
  background: #0C3270;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
