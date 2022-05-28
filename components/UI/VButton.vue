<template>
  <button
    :type="type"
    :disabled="isDisabled"
    v-on="$listeners"
    :class="[
      'v-button',
      `v-button_${type}`,
      { 'disabled' : isDisabled },
    ]"
  >
    <span class="v-button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    type: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-button {
  @include flexCenter;
  padding: 10px 15px;
  cursor: pointer;
  transition: 250ms;
  border: none;
  outline: none;
  user-select: none;
}

.v-button_white {
  @include font(16px, 20px, 600, $black);
  background: $white;

  &:hover {
    background: $bard;
    color: $white;
  }
}

.v-button_bard {
  @include font(16px, 20px, 600, $white);
  background: $bard;

  &:hover {
    background: $white;
    color: $bard;
  }
}
</style>