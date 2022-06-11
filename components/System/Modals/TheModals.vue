<template>
  <div class="the-modals">
    <RegistrationModal />
    <LoginModal />
  </div>
</template>

<script>
import RegistrationModal from '@/components/System/Modals/Registration/RegistrationModal';
import LoginModal from '@/components/System/Modals/Login/LoginModal';

export default {
  name: 'TheModals',
  components: {
    RegistrationModal,
    LoginModal,
  },
}
</script>

<style lang="scss" scoped>
.vm--container {
  @include flexCenter;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, .6);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: scroll;
}

::v-deep .vm--overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

::v-deep .vm--modal {
  margin: auto;
}
</style>
