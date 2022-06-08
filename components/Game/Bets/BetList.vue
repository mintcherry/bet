<template>
  <div class="bet-list">
    <div class="bet-list__title">
      {{ betList.group_name }}
    </div>
    
    <div class="bet-list__wrapper">
      <BetListItem
          v-for="(coupon, i) of availableCoupon"
          :key="i"
          :coupon="coupon"
      />
    </div>
  </div>
</template>

<script>
import BetListItem from '@/components/Game/Bets/BetListItem';

export default {
  name: 'BetList',
  components: {
    BetListItem,
  },
  
  props: {
    betList: Object,
  },
  computed: {
    availableCoupon() {
      return this.betList.oc_list;
    },
  },
}
</script>

<style lang="scss" scoped>
.bet-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  break-inside: avoid-column;
}

.bet-list__title {
  @include font(16px, 20px, 600, $white);
  padding: 10px;
  background: $bard;
}

.bet-list__wrapper {
  display: flex;
  flex-direction: column;
}
</style>
