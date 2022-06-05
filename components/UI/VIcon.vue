<template>
  <div
      v-on="$listeners"
      class="v-icon"
  >
    <component
        :is="name"
        :style="stylesForIcon"
    />
  </div>
</template>

<script>
import CloseIcon from '@/assets/svg/close.svg?inline';

export default {
  name: 'VIcon',
  components: {
    CloseIcon,
  },
  
  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 16,
    },
    width: {
      type: Number,
      default: 16,
    },
    
    isClickable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    stylesForIcon() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.v-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  
  /deep/ path {
    transition: 250ms;
  }
}
</style>
