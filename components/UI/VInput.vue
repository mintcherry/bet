<template>
  <div class="v-input">
    <input
        v-bind="$attrs"
        v-on="$listeners"
        :disabled="isDisabled"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        class="v-input__input"
        @input="emitChange"
        @change="emitChange"
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',
  
  model: {
    prop: 'value',
    event: 'changed',
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  
  methods: {
    emitChange(event) {
      this.$emit('changed', event.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
.v-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  transition: all .2s ease-in-out;
}

.v-input__input {
  @include font(16px, 20px, 400, $white);
  padding: 5px 10px;
  background: #0C3270;
  border: none;
  border-radius: 8px;
  position: relative;
  outline: none;
  transition: all .2s ease-in-out;
  box-sizing: border-box;
  z-index: 5;
  
  &::-moz-placeholder {
    font-size: 14px;
  }
  
  &::-webkit-input-placeholder {
    font-size: 14px;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
