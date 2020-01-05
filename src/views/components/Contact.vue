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
        form.contact__form
          input.contact__form__input(name="form__name", type="text", placeholder="Name")
          input.contact__form__input(name="form__email", type="email", placeholder="Email")
          textarea.contact__form__textarea(name="form__message", placeholder="Message", rows=5)
          button.contact__form__btn="Send message"
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
  methods: {
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
