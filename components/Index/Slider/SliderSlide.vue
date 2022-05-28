<template>
  <div class="slider-slide">
    <img
      :src="slide"
      :alt="null"
      class="slider-slide__img"
    />
  </div>
</template>

<script>
export default {
  name: 'SliderSlide',

  props: {
    slide: String,
    required: true,
  },
}
</script>

<style lang="scss" scoped>
.slider-slide {
  width: 100%;
}

.slider-slide__img {
  width: 100%;
}
</style>