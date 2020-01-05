<template lang="pug">
  main
    hero
    services
    portfolio
    JobModal
    contact
</template>

<script>

import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import VueTyper from 'vue-typer'
import JobModal from './components/JobModal'

export default {
  name: 'Home',
  components: {
    Hero,
    Services,
    Portfolio,
    Contact,
    VueTyper,
    JobModal
  },
  data: function () {
    return {
      sessionToken: String
    }
  },
  computed: {
    // images
    logoImage () {
      return require(`../assets/${process.env.VUE_APP_IMAGE_LOGO}`)
    },
    contactImage () {
      return require(`../assets/${process.env.VUE_APP_IMAGE_CONTACT}`)
    }
  },
  mounted () {
  },
  methods: {
    parsedDate (date) {
      let month = date.substr(5, 2)
      let day = date.substr(8, 2)
      let parsed = `${day}/${month}`
      return parsed
    }
  }
}
</script>

<style lang="scss">

</style>
