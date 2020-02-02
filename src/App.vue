<template lang="pug">
  <div id="app">
    navbar
    <router-view/>
    .hp__footer
      .hp__footer__socials
        a(href='https://instagram.com/eubrenocunha', target='_blank', rel='noreferrer noopener')
          span.hp__footer__socials__ig
      small.hp__footer__copy(v-html="`© Copyright 2009-${new Date().getUTCFullYear()}<br /> Irmãos Reale Desenvolvimento de Softwares Ltda.<br />All rights reserved.`")
  </div>
</template>

<script>
import Navbar from './views/components/Navbar'

export default {
  components: {
    Navbar
  },
  mounted () {
  },
  computed: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hp {
  &__footer {
    height: fit-content;
    padding: 1em;
    background-color: $white;
    color: $blue;
    font-family: $cft;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    min-height: 400px;
    flex-direction: column;
    justify-content: space-around;

    &__copy {
      max-width: 50%;
    }

    &__socials {
      &__ig {
        mask: url('./assets/instagram.svg') no-repeat center;
        -webkit-mask: url('./assets/instagram.svg') no-repeat center;
        background-color: $blue;
        width: 30px;
        height: 30px;
        display: block;
      }
    }
  }
}
</style>
