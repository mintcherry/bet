<template>
  <div class="navigation-column">
    <nuxt-link
      :to="navigation.url"
      class="navigation-column__link"
      active-class="active"
    >
      {{ navigation.label }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationColumn',

  props: {
    navigation: Object,
  },
}
</script>

<style lang="scss" scoped>
.navigation-column__link {
  @include font(16px, 20px, 600, $white);
  padding: 15px;
  transition: 250ms;

  &:hover {
    background: $bard;
  }

  &.active {
    background: $bard;
  }
}
</style>
