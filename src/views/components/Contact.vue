<template lang="pug">
  section#contact
    h2.contact--title="Contact"
    .contact.container
      .contact__address.column
        .contact__address__item
          h3.contact__address__item__city="São Paulo"
          p.contact__address__item__details(v-html="'418 R. Funchal <br/> São Paulo - SP, 04551-060 BR'")
        .contact__address__item
          h3.contact__address__item__city="Salvador"
          p.contact__address__item__details(v-html="'214 R. Ilhéus <br/> Salvador - BA, 41940-570 BR'")
      .column
        img.contact__form__spinner(v-if="!messageSent && sendingMessage", src="../../assets/spinner.svg")
        form.contact__form(v-if="!messageSent && !sendingMessage && !messageError")
          input.contact__form__input(name="form__name", type="text", placeholder="Name", v-model="form__name")
          input.contact__form__input(name="form__email", type="email", placeholder="Email", v-model="form__email")
          textarea.contact__form__textarea(name="form__message", placeholder="Message", rows=5, v-model="form__message")
          button.contact__form__btn(@click="sendForm($event)")="Send message"
        .contact__form__success(v-if="messageSent && !sendingMessage && !messageError")="Message sent!"
        .contact__form__error(v-if="messageError && !sendingMessage && !messageSent")="There was an error sending your message, please try again later or give us a call."
      .contact__phone.column
        h3.contact__phone__title="Or give us a call"
        p.contact__phone__details="+55 (11) 94466-6162"

</template>

<script>
export default {
  name: 'Contact',
  components: {
  },
  props: {
  },
  data () {
    return {
      form__name: '',
      form__email: '',
      form__message: ''
    }
  },
  computed: {
    messageSent () {
      return this.$store.state.messageSent
    },
    sendingMessage () {
      return this.$store.state.sending
    },
    messageError () {
      this.updateError()
      return this.$store.state.messageError
    }
  },
  methods: {
    async sendForm (e) {
      this.$store.commit('sendingMessage')
      e.preventDefault()
      await this.$recaptchaLoaded()
      const token = await this.$recaptcha('login')
      console.log(token)
      let payload = { form__name: this.form__name, form__email: this.form__email, form__message: this.form__message, token: token }
      this.$store.dispatch('sendEmail', payload)
    },
    async updateError () {
      if (this.$store.state.messageError) {
        setTimeout(() => {
          this.$store.commit('consolidateMessageError')
        }, 4000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#contact {
  position: relative;
  max-width: 100%;
  background-color: $black;
  min-height: 480px;
  display: flex;
  justify-content: center;
  z-index: 0;
  flex-direction: column;

  .container {
    margin-top: 3em;
    max-width: 1200px;
    margin: 3em auto;
    margin-bottom: 6em;
    overflow: hidden;
    @include lg-down {
      max-width: 90%;
      margin: 1em auto;
    }
  }
}

.contact {
  color: $white !important;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  text-align: left;

  @include lg-down {
    flex-direction: column;
    padding: 1em;
    justify-content: center;
    align-items: center;
  }

  &--title {
    font-family: $cft;
    font-size: 36px;
    color: $white;
    margin-top: 3em;
  }

  .column {
    width: 33%;
    display: flex;
    flex-direction: column;
    @include lg-down {
      width: 100%;
    }
  }

  &__address {
    &__item {
      margin: 0 0 4em 0;
      &__city {
        margin: 0;
        font-family: $cft;
        font-size: 24px;
      }

      &__details {
        font-family: $ops;
        font-size: 16px;
        margin-left: 2em;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;

    @include lg-down {
      max-width: 100%;
    }

    &__input, &__textarea {
      padding: 1em;
      margin: 0 0 1em 0;
      border-radius: 5px;
      font-family: $cft;
    }

    &__btn {
      padding: 1.5em;
      max-width: 250px;
      background-color: #cdcdcd;
      border: none;
      color: $black;
      font-family: $cft;
      border-radius: 5px;
    }

    &__success, &__error {
      background-color: $white;
      border-radius: 5px;
      color: $black;
      font-family: $cft;
      font-size: 16px;
      padding: 2em;
    }

    &__error {
      background-color: #ff6961;
      color: $white;
    }
  }

  &__phone {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include lg-down {
      align-items: center;
      margin: 3em 0;
    }

    &__title {
      margin: 0;
      font-family: $cft;
      font-size: 24px;
    }

    &__details {
      font-family: $ops;
      font-size: 16px;
    }
  }
}
</style>
