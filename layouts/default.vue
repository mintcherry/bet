<template>
  <div class="default-layout">
    <TheHeader />

    <TheNavigation />

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
import TheNavigation from '@/components/System/Navigation/TheNavigation';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheNavigation,
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
  margin: 20px auto 0;
}

.default-wrapper__main {
  margin: 0 20px;
}

.default-wrapper__aside-left {
  width: 20%;
  height: 500px;
  background: red;
}

.default-wrapper__aside-right {
  width: 20%;
  height: 500px;
  background: green;
}
</style>
