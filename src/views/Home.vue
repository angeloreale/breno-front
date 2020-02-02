<template lang="pug">
  main
    hero
    services
</template>

<script>

import Hero from './components/Hero'
import Services from './components/Services'

export default {
  name: 'Home',
  components: {
    Hero,
    Services
  },
  data: function () {
    return {
      sessionToken: String
    }
  },
  computed: {
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
