<template>
  <div class="advertisement">
    <AdvertisementItem
        v-for="(image, i) of images"
        :key="i"
        :img="image"
    />
  </div>
</template>

<script>
import AdvertisementItem from '@/components/Asides/Right/Advertisement/AdvertisementItem';

export default {
  name: 'Advertisement',
  components: {
    AdvertisementItem,
  },
  
  data: () => ({
    images: [
      require('@/assets/img/banners/banner1.jpg'),
      require('@/assets/img/banners/banner2.png'),
    ],
  }),
}
</script>

<style lang="scss" scoped>
.advertisement {
  display: flex;
  flex-direction: column;
}
</style>
