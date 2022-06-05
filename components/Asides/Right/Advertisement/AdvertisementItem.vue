<template>
  <div class="advertisement-item">
    <img
        :src="img"
        :alt="null"
        class="advertisement-item__img"
    >
  </div>
</template>

<script>
export default {
  name: 'AdvertisementItem',
  
  props: {
    img: String,
  },
}
</script>

<style lang="scss" scoped>
.advertisement-item {
  margin-bottom: 20px;
}

.advertisement-item__img {
  max-width: 100%;
}
</style>
