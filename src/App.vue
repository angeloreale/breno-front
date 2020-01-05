<template lang="pug">
  <div id="app">
    navbar
    <router-view/>
    .hp__footer
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
    background-color: #2a2a2a;
    color: $white;
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

    &__copy {
      max-width: 50%;
    }
  }
}
</style>
