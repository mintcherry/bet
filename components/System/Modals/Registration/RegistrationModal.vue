<template>
  <Modal
      name="RegistrationModal"
      height="auto"
      transition="blowUp"
  >
    <div class="registration-modal">
      <div class="registration-modal__title">
        Регистрация
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'RegistrationModal',
}
</script>

<style lang="scss" scoped>
.registration-modal {
  max-width: 350px;
  width: 100%;
  padding: 20px;
  background: $white;
  box-sizing: border-box;
  position: relative;
}

.registration-modal__title {
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: $black;
  text-align: center;
  text-transform: uppercase;
}
</style>
