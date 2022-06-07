<template>
  <div class="timer">
    <div class="timer-top">
      До начала события осталось:
    </div>
    <div class="timer-wrapper">
      <div class="timer-wrapper__column">
        <div class="timer-wrapper__column-value">11</div>
        <div class="timer-wrapper__column-label">Дней</div>
      </div>
      <div class="timer-wrapper__column">
        <div class="timer-wrapper__column-value">09</div>
        <div class="timer-wrapper__column-label">Часов</div>
      </div>
      <div class="timer-wrapper__column">
        <div class="timer-wrapper__column-value">15</div>
        <div class="timer-wrapper__column-label">Минут</div>
      </div>
      <div class="timer-wrapper__column">
        <div class="timer-wrapper__column-value">54</div>
        <div class="timer-wrapper__column-label">Секунд</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
}
</script>

<style lang="scss" scoped>
.timer-top {
  @include flexCenter;
  @include font(16px, 20px, 500, $white);
  margin-bottom: 10px;
}

.timer-wrapper {
  display: flex;
}

.timer-wrapper__column {
  display: flex;
  flex-direction: column;
  
  &:not(:last-child) {
    margin-right: 5px;
  }
}

.timer-wrapper__column-value {
  @include flexCenter;
  @include font(24px, 30px, 600, $black);
  min-width: 50px;
  height: 35px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
}

.timer-wrapper__column-label {
  @include flexCenter;
  @include font(14px, 16px, 500, $white);
}
</style>
