<template>
  <div class="support">
    <div class="support__title">
      Служба поддержки
      <span>24/7</span>
    </div>
    
    <div class="support__contact">
      shtootoProBet.one@gmail.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'Support'
}
</script>

<style lang="scss" scoped>
.support {
  margin-bottom: 20px;
  padding: 10px;
  background: #05142C;
  box-sizing: border-box;
}

.support__title {
  @include font(16px, 20px, 600, $white);
  margin-bottom: 10px;
  
  span {
    color: $bard;
  }
}

.support__contact {
  @include font(14px, 16px, 500, $white);
}
</style>
