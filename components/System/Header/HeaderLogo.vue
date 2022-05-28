<template>
  <div class="header-logo">
    <nuxt-link to="/">
      <Logo class="header-logo__logo" />
    </nuxt-link>
  </div>
</template>

<script>
import Logo from '@/assets/svg/logo.svg?inline';

export default {
  name: 'HeaderLogo',
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.header-logo__logo {
  width: 150px;
  height: 45px;
}
</style>
