<template>
  <div class="bet-list-item">
    <div class="bet-list-item__name">
      {{ coupon.oc_name }}
    </div>
    <div class="bet-list-item__value">
      {{ coupon.oc_rate }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BetListItem',
  
  props: {
    coupon: Object,
  },
}
</script>

<style lang="scss" scoped>
.bet-list-item {
  display: flex;
  height: 100%;
  background: $white;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: 1px solid #F5F5F5;
  }
  
  &:hover {
    .bet-list-item__value {
      background: $black;
      color: $white;
      opacity: .9;
    }
  }
}

.bet-list-item__name {
  @include font(14px, 18px, 600, $black);
  width: 90%;
  height: 100%;
  padding: 7px 5px 7px 10px;
}

.bet-list-item__value {
  @include flexCenter;
  @include font(14px, 18px, 600, $black);
  width: 10%;
  padding: 7px;
  background: #ECECEC;
  box-sizing: border-box;
  transition: 250ms;
}
</style>
