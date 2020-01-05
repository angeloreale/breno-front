<template lang="pug">
  section#portfolio
    div.portfolio
      div.portfolio__item(v-for="(job, index) in portfolioData", :key="job.company", @click="openModal(job)" )
        .container.portfolio__item__content
          .portfolio__item__category
            span="{{job.categories[0]}}"
          h3.portfolio__item__title="{{job.company}}"
          p.portfolio__item__tag="{{job.description}}"
        .portfolio__item__bg
          .overlay
          img.portfolio__item__bg__img(:src="job.bg_image")

</template>

<script>

import PortfolioData from '../data/portfolioData'

export default {
  name: 'Portfolio',
  components: {
  },
  props: {
    portfolioData: {
      type: Array,
      default: () => { return PortfolioData.portfolio }
    }
  },
  methods: {
    openModal (job) {
      this.$modal.show('job-modal', { data: job })
    }
  }
}
</script>

<style lang="scss" scoped>

#portfolio {
  position: relative;
  max-width: 100%;
  background-color: $white;
  min-height: 480px;
  display: flex;
  justify-content: center;
  z-index: 0;

  .container {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    max-width: 500px;
  }
}

.portfolio {
  width: 100%;
  &__title {
  font-size: 36px;
  font-family: $cft;
  color: $black;
  }

  &__item {
    position: relative;
    min-height: 400px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -5px 0;
    z-index: 9;
    width: 100%;
    min-height: 400px;
    transition: all 1s;

    @include xl-up {
      min-height: 500px;
    }

    &__content {
      z-index: 2;
    }

    &__category {
      border: 1px solid $black;
      width: fit-content;
      margin: 0 auto;
      padding: .5em;
      border-radius: 3px;
      span {
        font-family: $cft;
        font-size: 12px;
      }
    }

    &__title {
      font-family: $cft;
      font-size: 24px;
    }

    &__tag {
      font-family: $ops;
      font-size: 16px;
      padding: 1em;
    }

    &__bg {
      position: absolute;
      top: 0;
      z-index: 0;
      height: 100%;
      width: 100%;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: white;
        opacity: 0.85;
        z-index: 1;
        transition: all 1s;
      }

      &__img {
        object-fit: cover;
        height: 400px;
        width: 100%;

        @include lg-up {
          width: 100%;
          object-fit: cover;
          height: 100%;
          object-position: center 20%;
        }
        @include xl-up {
          object-position: center 30%;
        }
      }
    }

    &:hover, &:focus, &:active {
      cursor: pointer;
      color: $white;
      transition: all 1s;
      .overlay {
        background-color: $black;
        transition: all 1s;
      }
      .portfolio__item__category {
        border-color: $white !important;
      }
    }
  }
}
</style>
