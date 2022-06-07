<template>
  <div class="casino-item">
    <div class="casino-item__name">
      {{ casino.name }}
    </div>
    
    <img
        :src="casino.img"
        :alt="null"
        class="casino-item__background"
    />
    
    <nuxt-link to="" class="casino-item__link"></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CasinoItem',
  
  props: {
    casino: Object,
  },
}
</script>

<style lang="scss" scoped>
.casino-item {
  height: 180px;
  border: 3px solid #05142c;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.casino-item__name {
  @include flexCenter;
  @include font(14px, 18px, 500, $white);
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  bottom: 0;
}

.casino-item__background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.casino-item__link {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
