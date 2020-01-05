<template lang="pug">
  section#services
    h2.services__title="Solutions"
    .container
      ul.services
        li.services__item(v-for="(service, index) in servicesData", :key="index" )
          h3.services__item__title="{{service.title}}"
          p.services__item__tag="{{service.tagline}}"

</template>

<script>

import ServicesData from '../data/servicesData'

export default {
  name: 'Services',
  components: {
  },
  props: {
    servicesData: {
      type: Array,
      default: () => { return ServicesData.services }
    }
  }
}
</script>

<style lang="scss" scoped>

#services {
  position: relative;
  max-width: 100%;
  background-color: $black;
  min-height: 480px;
  display: flex;
  justify-content: center;
  padding-bottom:  3em;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
  }
}

.services {
  display: flex;
  color: $white;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin: 0 auto;

  @include lg-down {
    flex-direction: column;
  }

  &__title {
    font-size: 36px;
    font-family: $cft;
    color: $white;
    margin-top: 3em;
  }
  &__item {
    text-align: left;
    padding: 3em;
    width: calc(29% - 3em);
    @include lg-down {
      width: 100%;
      padding: 0 2em;
      box-sizing: border-box;
    }

    &__title {
      font-family: $cft;
      font-weight: 900;
      font-size: 20px;
    }
    &__tag {
      font-family: $ops;
    }
  }
}
</style>
