<template>
  <div class="coupon-info">
    <div class="coupon-info__row">
      <div class="coupon-info__label">Коэфф:</div>
      
      <VInput
          v-model="ratio"
          isDisabled
          class="coupon-info__value"
      />
    </div>
    <div class="coupon-info__row">
      <div class="coupon-info__label">Выигрыш:</div>
      
      <VInput
          v-model="winning"
          isDisabled
          class="coupon-info__value"
      />
    </div>
    <div class="coupon-info__row">
      <div class="coupon-info__label">Сумма:</div>
      
      <VInput
          v-model="amount"
          type="number"
          class="coupon-info__value"
      />
    </div>
  </div>
</template>

<script>
import VInput from '@/components/UI/VInput';

export default {
  name: 'CouponInfo',
  components: {
    VInput,
  },
  
  data: () => ({
    ratio: null,
    winning: null,
    amount: 100,
  }),
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
    .coupon-info__value {
      width: 100px;
      
      ::v-deep .v-input__input {
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
  width: 40px;
}
</style>
