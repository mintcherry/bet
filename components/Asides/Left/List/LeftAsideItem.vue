<template>
  <div class="left-aside-item">
    <nuxt-link
        v-if="imageOfSport"
        active-class="active"
        :to="{
          path: link,
          query: {
            id: sport.id,
          }
        }"
        class="left-aside-item__link"
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import { SPORTS } from '@/utils/sports';
import { API_MODE } from '@/utils/apiParams';

export default {
  name: 'LeftAsideItem',
  
  props: {
    sport: Object,
  },
  data: () => ({
    routeName: '',
  }),
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
      let sportName = this.sport.name_en.toLowerCase().replace(' ', '');
      
      if (this.$route.name.includes(API_MODE.LINE)) {
        this.routeName = API_MODE.LINE;
      } else
        if (this.$route.name.includes(API_MODE.LIVE)) {
          this.routeName = API_MODE.LIVE;
        } else {
          this.routeName = API_MODE.LINE;
        }
      
      return `/${this.routeName}` + `/${sportName}`;
    },
  },
}
</script>

<style lang="scss" scoped>
.left-aside-item {
  cursor: pointer;
  
  &:hover {
    .left-aside-item__name {
      color: $bard;
    }
    
    .left-aside-item__link.active {
      .left-aside-item__name {
        color: $white;
      }
    }
  }
}

.left-aside-item__link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 5px 7px 15px;
  
  &.active {
    background: $bard;
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
