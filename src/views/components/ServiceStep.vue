<template>
  <div>
    <div class="service__step">
      <h1 class="service__step__title">{{ stepNumber }}. <span class="service__step__title__header">{{stepTitle}}</span></h1>
      <div class="service__step__content" v-html="stepContent"></div>
      <button-router class="service__step__cta" :link="stepCtaLink" :text="stepCtaText" isBlue btnType="link"></button-router>
    </div>
  </div>
</template>

<script>
import ButtonRouter from '../components/ButtonRouter'
export default {
  components: {
    ButtonRouter
  },
  props: {
    stepNumber: {
      type: Number,
      default: 0
    },
    stepTitle: {
      type: String,
      default: 'lorem lorem'
    },
    stepContent: {
      type: String,
      default: '<div>Loler</div>'
    },
    stepCtaLink: {
      type: String,
      default: '#'
    },
    stepCtaText: {
      type: String,
      default: 'Click me'
    }
  }
}
</script>

<style lang="scss" scoped>
  .service {
    &__step {
      font-family: $ops;
      &__title {
        font-family: $cft;
        color: $blue;
        &__header {
          font-weight: 300;
        }
      }
      &__content {
        font-size: 20px;
      }
    }
  }
</style>
