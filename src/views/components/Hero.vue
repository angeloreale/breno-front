<template lang="pug">
  section.wrapper#hero
    .hero
      section.hero__typer
        span.hero__typer__text="Você mais "
          vue-typer.hero__typer__text__animated(:text='["livre.", "autêntico.", "realizado.", "consciente."]', :shuffle=false, eraseStyle="backspace", :eraseDelay=60)

    .hero__bg
      .overlay
      <img src='../../assets/banner.jpg' />

</template>

<script>

import { VueTyper } from 'vue-typer'

export default {
  name: 'Hero',
  components: {
    VueTyper
  }
}
</script>

<style lang="scss">
.caret {
  width: 3px !important;
  margin: 4px;
  background-color: $blue !important;
}
.typed {
  color: $blue !important;
}
</style>

<style lang="scss" scoped>

#hero.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 50vh;
  overflow: hidden;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  background: none;

  &__bg {
    position: relative;
    background-color: black;
    height: 100vh;
    min-height: 25rem;
    width: 100vw;
    max-width: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: 1;
      -ms-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: white;
      opacity: 0.88;
      z-index: 2;
    }
  }

  &__typer {
    font-family: $cft;
    font-size: 32px;
    position: absolute;
    z-index: 4;
    font-weight: 100;
    @include lg-down {
      font-size: 24px;
    }

    &__text {
      &__animated {
        font-weight: 500;
        color: $blue;
      }
    }
  }
}
</style>
