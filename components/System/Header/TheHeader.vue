<template>
  <header class="the-header">
    <div class="the-header__wrapper">
      <HeaderLogo />

      <HeaderControl />
    </div>
  </header>
</template>

<script>
import HeaderLogo from '@/components/System/Header/HeaderLogo';
import HeaderControl from '@/components/System/Header/HeaderControl';

export default {
  name: 'TheHeader',
  components: {
    HeaderLogo,
    HeaderControl,
  },
}
</script>

<style lang="scss" scoped>
.the-header {
  @include flexCenter;
  width: 100%;
  min-height: 60px;
  background: $dark-blue;
}

.the-header__wrapper {
  @include flexBetween;
  align-items: center;
  max-width: 1920px;
  width: 90%;
  margin: 0 auto;
}
</style>