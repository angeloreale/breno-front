<template lang="pug">
    modal.job__modal(name="job-modal", @before-open="parseData")
      p.line
        span.line__key="Company: "
        span.line__value="{{jobData.company}}"
      p.line
        span.line__key="Year: "
        span.line__value="{{jobData.year}}"
      p.line(v-if="jobData.length > 0")
        span.line__key="Type of Project: "
        span.line__value="{{jobData.categories[0]}}"
      p.line
        span.line__key="Project Description: "
        span.line__value="{{jobData.description}}"
      p.line
        span.line__key="Our Responsabilities: "
        span.line__value="{{jobData.responsabilities}}"
      p.line
        span.line__key="Technologies Used: "
        span.line__value="{{jobData.technologies}}"
      p.line(v-if="jobData.link")
        span.line__key="Relevant Link: "
        a.line__value(:href="jobData.link", target="_blank", rel="noreferrer noopener")="{{jobData.link}}"
</template>

<script>
import VModal from 'vue-js-modal'

export default {
  name: 'JobModal',
  components: {
    VModal
  },
  data () {
    return {
      jobData: {}
    }
  },
  methods: {
    parseData (event) {
      this.jobData = event.params.data
    }
  }
}
</script>

<style lang="scss">

.job__modal {

  .v--modal-background-click {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v--modal {
    padding: 2em;
    background-color: $black;
    color: $white;
    height: fit-content !important;

    left: 0 !important;
    top: 0 !important;

    @include sm-down {
      left: 0 !important;
      width: fit-content !important;
    }
  }

  .line {
    margin: 1em 0;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    &__key {
      font-family: $cft;
      font-size: 16px;
    }
    &__value {
      font-family: $ops;
      font-size: 12px;

      &:link, &:visited {
        color: $white;
      }
    }
  }
}

</style>
