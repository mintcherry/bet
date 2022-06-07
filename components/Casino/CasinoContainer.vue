<template>
  <div class="casino-container">
    <CasinoItem
        v-for="(casino, i) of casinoList"
        :key="i"
        :casino="casino"
    />
  </div>
</template>

<script>
import CasinoItem from '@/components/Casino/CasinoItem';

export default {
  name: 'CasinoContainer',
  components: {
    CasinoItem,
  },
  
  computed: {
    casinoList() {
      return [
        {
          name: 'American Gangster',
          link: '',
          img: require('@/assets/img/casino/casino1.jpg'),
        },
        {
          name: 'Bananas go Bahamas',
          link: '',
          img: require('@/assets/img/casino/casino2.jpg'),
        },
        {
          name: 'Bank Raid',
          link: '',
          img: require('@/assets/img/casino/casino3.jpg'),
        },
        {
          name: 'Bars and Sevens',
          link: '',
          img: require('@/assets/img/casino/casino4.jpg'),
        },
        {
          name: 'Bavarian Forest',
          link: '',
          img: require('@/assets/img/casino/casino5.jpg'),
        },
        {
          name: 'Big Joker',
          link: '',
          img: require('@/assets/img/casino/casino6.jpg'),
        },
        {
          name: 'Candy Storm',
          link: '',
          img: require('@/assets/img/casino/casino7.jpg'),
        },
        {
          name: 'Dolphins Pearl',
          link: '',
          img: require('@/assets/img/casino/casino8.jpg'),
        },
        {
          name: 'Dragon Boat',
          link: '',
          img: require('@/assets/img/casino/casino9.jpg'),
        },
        {
          name: 'Flamenco Roses',
          link: '',
          img: require('@/assets/img/casino/casino10.jpg'),
        },
        {
          name: 'Fruit Tumbling',
          link: '',
          img: require('@/assets/img/casino/casino11.jpg'),
        },
        {
          name: 'Fruits Royals',
          link: '',
          img: require('@/assets/img/casino/casino12.jpg'),
        },
        {
          name: 'Full of Luck',
          link: '',
          img: require('@/assets/img/casino/casino13.jpg'),
        },
        {
          name: 'Golden Shanghai',
          link: '',
          img: require('@/assets/img/casino/casino14.jpg'),
        },
        {
          name: 'Gorgeous Goddess',
          link: '',
          img: require('@/assets/img/casino/casino15.jpg'),
        },
        {
          name: 'Grand Jester',
          link: '',
          img: require('@/assets/img/casino/casino16.jpg'),
        },
        {
          name: 'Grand Spinn Superpot',
          link: '',
          img: require('@/assets/img/casino/casino17.jpg'),
        },
        {
          name: 'Live Streaming Star',
          link: '',
          img: require('@/assets/img/casino/casino18.jpg'),
        },
        {
          name: 'Lovel yMermaid',
          link: '',
          img: require('@/assets/img/casino/casino19.jpg'),
        },
        {
          name: 'Lucky Ladys Charm',
          link: '',
          img: require('@/assets/img/casino/casino20.jpg'),
        },
        {
          name: 'Magic Princess',
          link: '',
          img: require('@/assets/img/casino/casino21.jpg'),
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.casino-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
