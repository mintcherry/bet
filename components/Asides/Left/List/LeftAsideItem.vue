<template>
  <nuxt-link
      v-if="imageOfSport"
      :to="{
        path: link,
        query: {
          id: sport.id,
        }
      }"
      class="left-aside-item"
  >
    <img
        :src="imageOfSport"
        :alt="null"
        class="left-aside-item__img"
    />
    
    <span class="left-aside-item__name">
      {{ sport.name }}
    </span>
  </nuxt-link>
</template>

<script>
import { SPORTS } from '@/utils/sports';
// import { DATA_TYPE } from '@/utils/apiParams';
// import { API_MODE } from '@/utils/apiParams';

export default {
  name: 'LeftAsideItem',
  
  props: {
    sport: Object,
  },
  computed: {
    imageOfSport() {
      switch (this.sport.name) {
        case SPORTS.FOOTBALL:
          return require('@/assets/img/sports/football.png');
        case SPORTS.HOCKEY:
          return require('@/assets/img/sports/hokey.png');
        case SPORTS.BASKETBALL:
          return require('@/assets/img/sports/basketball.png');
        case SPORTS.TENNIS:
          return require('@/assets/img/sports/tenis.png');
        case SPORTS.VOLLEYBALL:
          return require('@/assets/img/sports/valeball.png');
        case SPORTS.TABLE_TENNIS:
          return require('@/assets/img/sports/tabel-tennis.png');
        case SPORTS.BEACH_VOLLEYBALL:
          return require('@/assets/img/sports/valeball.png');
        case SPORTS.CYBER:
          return require('@/assets/img/sports/cyber.png');
        case SPORTS.VICTORY_FORMULA:
          return require('@/assets/img/sports/formula.png');
        case SPORTS.BASEBALL:
          return require('@/assets/img/sports/baseball.png');
      }
    },
    
    link() {
      let routeName = this.$route.name;
      let sportName = this.sport.name_en.toLowerCase().replace(' ', '');
      
      return routeName + `/${sportName}`;
      // return 'tournament/' + this.sport.id + '/0' + `/${routeName}` + '/ru';
    },
  },
  
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
.left-aside-item {
  display: flex;
  align-items: center;
  padding: 7px 5px;
  cursor: pointer;
  
  &:hover {
    .left-aside-item__name {
      color: $bard;
    }
  }
}

.left-aside-item__name {
  @include font(16px, 20px, 400, $white);
  margin-left: 10px;
  font-family: 'Calibri', sans-serif;
  transition: 250ms;
}

.left-aside-item__img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
</style>
