<template>
  <Modal
      name="RegistrationModal"
      height="auto"
      transition="blowUp"
      @closed="resetFormField"
  >
    <div class="registration-modal">
      <div class="registration-modal__title">
        Регистрация
      </div>
      
      <VIcon
          name="CloseIcon"
          :width="25"
          :height="25"
          class="registration-modal__close-icon"
          @click="$modal.hide('RegistrationModal')"
      />
      
      <form
          class="registration-modal__form"
          @submit.prevent="sendRegistrationForm"
      >
        <VInput
            v-model="form.name"
            placeholder="Фамилия имя"
            class="registration-modal__input"
        />
        
        <VInput
            v-model="form.phone"
            type="tel"
            placeholder="Телефон"
            class="registration-modal__input"
        />
        
        <VInput
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="registration-modal__input"
        />
        
        <VInput
            v-model="form.password"
            type="password"
            placeholder="Пароль"
            class="registration-modal__input"
        />
        
        <VInput
            v-model="form.passwordRepeat"
            type="password"
            placeholder="Повторите пароль"
            class="registration-modal__input"
        />
        
        <VButton
            :customType="V_BUTTON.BARD"
            class="registration-modal__btn-reg"
            type="submit"
        >
          Регистрация
        </VButton>
        
        <div class="registration-form__agree">
          Нажимая кнопку, Вы соглашаетесь на обработку персональных данных
        </div>
      </form>
      
      <img
          src="@/assets/img/registration/label2.png"
          :alt="null"
          class="registration-modal__label-top"
      />
      <img
          src="@/assets/img/registration/label1.png"
          :alt="null"
          class="registration-modal__label-middle"
      />
      <img
          src="@/assets/img/registration/box.png"
          :alt="null"
          class="registration-modal__label-bottom"
      />
    </div>
  </Modal>
</template>

<script>
import VIcon from '@/components/UI/VIcon';
import VInput from '@/components/UI/VInput';
import VButton from '@/components/UI/VButton';

import { V_BUTTON } from '@/utils/UI';

export default {
  name: 'RegistrationModal',
  components: {
    VIcon,
    VInput,
    VButton,
  },
  
  data: () => ({
    V_BUTTON,
    form: {
      name: null,
      phone: null,
      email: null,
      password: null,
      passwordRepeat: null,
    }
  }),
  
  methods: {
    resetFormField() {
      this.form = {
        name: null,
        phone: null,
        email: null,
        password: null,
        passwordRepeat: null,
      }
    },
    
    sendRegistrationForm() {},
  },
}
</script>

<style lang="scss" scoped>
.registration-modal {
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
}

.registration-modal__title {
  @include font(18px, 24px, 800, $black);
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
}

.registration-modal__close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  
  &:hover {
    /deep/ path {
      fill: $black;
    }
  }
}

.registration-modal__input {
  margin-bottom: 15px;
  
  /deep/ .v-input__input {
    padding: 7px 15px;
    font-weight: bold;
    background: #ECECEC;
    border-radius: 20px;
    color: $black;
    
    &::-webkit-input-placeholder {
      font-weight: bold;
    }
  }
}

.registration-modal__btn-reg {
  width: 100%;
  margin: 0 auto 15px;
  border-radius: 20px;
}

.registration-form__agree {
  @include font(14px, 18px, 600, $black);
  text-align: center;
}

.registration-modal__label-top {
  position: absolute;
  top: -50px;
  left: -40px;
  user-select: none;
}

.registration-modal__label-middle {
  position: absolute;
  top: 200px;
  right: -90px;
  user-select: none;
}

.registration-modal__label-bottom {
  position: absolute;
  bottom: -70px;
  left: -70px;
  user-select: none;
}
</style>
