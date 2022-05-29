<template>
  <div class="the-navigation">
    <div class="the-navigation__wrapper">
<!--      <div class="the-navigation__left">-->
        <NavigationColumn
          v-for="(navigation, i) of navigations"
          :key="i"
          :navigation="navigation"
        />
<!--      </div>-->

<!--      <div class="the-navigation__right">-->
<!--        <NavigationColumn-->
<!--          v-for="(navigation, i) of navigations"-->
<!--          :key="i"-->
<!--          :navigation="navigation"-->
<!--        />-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import NavigationColumn from '@/components/System/Navigation/Column/NavigationColumn';

export default {
  name: 'TheNavigation',
  components: {
    NavigationColumn,
  },

  computed: {
    navigations() {
      return [
        {
          label: 'Линия',
          url: '/line',
        },
        {
          label: 'Лайв',
          url: '/live',
        },
        // {
        //   label: 'Казино',
        //   url: '/casino',
        // },
        {
          label: 'Результаты',
          url: '/results',
        },
        {
          label: 'Проверить купон',
          url: '/coupon',
        },
        // {
        //   label: 'Ммобильное приложение',
        //   url: '/mobile-app',
        // },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.the-navigation {
  width: 100%;
  background: #05142C;
}

.the-navigation__wrapper {
  display: flex;
  align-items: center;
  max-width: 1920px;
  width: 90%;
  margin: 0 auto;
  height: 50px;
}
</style>