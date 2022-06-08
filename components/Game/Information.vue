<template>
  <div class="information">
    <div class="information-date">
      <span>{{ gameDayStart }} {{ gameMonthStart }}</span>
      <span>{{ gameTimeStart }}</span>
    </div>
    <div class="information-opponents">
      {{ opponents }}
    </div>
    <div class="information-tournament">
      {{ tournament }}
    </div>
    
    <!--    <Timer />-->
  </div>
</template>

<script>
import Timer from '@/components/Game/Timer';

export default {
  name: 'Information',
  components: {
    Timer,
  },
  
  props: {
    opponents: String,
    date: Number,
    tournament: String,
  },
  computed: {
    gameDayStart() {
      return this.$dayjs.unix(this.date).locale('ru').format('DD');
    },
    gameMonthStart() {
      let month = this.$dayjs.unix(this.date).locale('ru').format('MMM').replace('.', '');
      month = month[0].toUpperCase() + month.slice(1);
      
      return month;
    },
    gameTimeStart() {
      return this.$dayjs.unix(this.date).locale('ru').format('HH:MM').replace('.', '');
    },
  }
}
</script>

<style lang="scss" scoped>
.information {
  @include flexCenter;
  flex-direction: column;
  height: 240px;
  background: url("@/assets/img/main-info-background.jpg");
  background-size: contain;
}

.information-opponents {
  @include font(24px, 20px, 800, $white);
  margin-bottom: 10px;
}

.information-date {
  @include flexCenter;
  flex-direction: column;
  margin-bottom: 10px;
  
  span {
    @include font(18px, 18px, 800, $white);
  }
}

.information-tournament {
  @include font(18px, 18px, 500, $white);
  margin-bottom: 20px;
}
</style>
