<template>
  <div class="header-control">
    <VButton
      :type="V_BUTTON.WHITE"
      class="header-control__registration-btn"
    >
      Регистрация
    </VButton>

    <VButton
      :type="V_BUTTON.BARD"
      class="header-control__login-btn"
    >
      Войти
    </VButton>
  </div>
</template>

<script>
import VButton from '@/components/UI/VButton';

import { V_BUTTON } from '@/utils/UI';

export default {
  name: 'HeaderControl',
  components: {
    VButton,
  },

  data: () => ({
    V_BUTTON,
  }),
}
</script>

<style lang="scss" scoped>
.header-control {
  display: flex;
}

.header-control__registration-btn {
  border-radius: 50px;
  margin-right: 10px;
}

.header-control__login-btn {
  border-radius: 50px;
}
</style>