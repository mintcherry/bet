<template>
  <div class="slider-container">

    <Slick
      ref="slick"
      :options="slickOptions"
      class="slider-container__slick"
    >
      <SliderSlide
        v-for="(slide, index) of sliderImages"
        :key="index"
        :slide="slide"
      />
    </Slick>

  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

import VButton from '@/components/UI/VButton';

import SliderSlide from '@/components/System/Slider/SliderSlide';

export default {
  name: 'SliderContainer',
  components: {
    Slick,
    VButton,
    SliderSlide,
  },

  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      infinite: true,
      draggable: false,
    },
    sliderImages: [
      require('assets/img/index-slider/slide1.jpg'),
      require('assets/img/index-slider/slide2.jpg'),
      require('assets/img/index-slider/slide3.jpg'),
    ],
  }),

  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
  },

}
</script>

<style lang="scss" scoped>
.slider-container {
  max-width: 890px;
  width: 100%;
  height: 340px;
}

.slider-container__slick {
  position: relative;
}
</style>