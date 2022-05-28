<template>
  <div class="default-layout">
    <TheHeader />

    <div class="default-wrapper__content">
      <aside class="default-wrapper__aside-left">

      </aside>
      <main class="default-wrapper__main">
        <nuxt />
      </main>
      <aside class="default-wrapper__aside-right">

      </aside>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/System/Header/TheHeader';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
}

.default-wrapper__content {
  display: flex;
  width: 90%;
  margin: 0 auto;
}

.default-wrapper__aside-left {
  width: 20%;
  height: 500px;
  background: red;
  margin-right: 10px;
}

.default-wrapper__aside-right {
  width: 20%;
  height: 500px;
  background: green;
  margin-left: 10px;
}
</style>