<template>
  <div class="event-list-header">
    <div
      v-for="(label, i) of topLabels"
      :key="i"
      class="event-list-header__label"
    >
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventListHeader',

  computed: {
    topLabels() {
      return ['Матч', 'П1', 'X', 'П2'];
    },
  },
}
</script>

<style lang="scss" scoped>
.event-list-header {
  display: flex;
  background: #05142C;
  padding: 10px;
}

.event-list-header__label {
  @include font(12px, 14px, 600, $white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;

  &:nth-of-type(1) {
    justify-content: flex-start;
    max-width: 550px;
    min-width: 150px;
    width: 100%;
  }
}
</style>
