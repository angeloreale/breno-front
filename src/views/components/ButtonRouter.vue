<template>
  <div>
    <router-link v-if="btnType === 'router'" class="btn" :class="{isWhite: isWhite, isBlue: isBlue}" :to="link">{{ text }}</router-link>
    <a v-if="btnType === 'link'" class="btn" :class="{isWhite: isWhite, isBlue: isBlue}" :href="link">{{ text }}</a>
  </div>
</template>

<script>

export default {
  props: {
    isBlue: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Button'
    },
    link: {
      type: String,
      default: '#'
    },
    btnType: {
      type: String,
      default: 'link'
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    padding: 2rem;
    font-family: $cft;
    display: block;
    max-width: 300px;
    margin: 3rem auto;
    border-radius: 5px;
    text-align: center;

    &, &:link, &:hover {
      text-decoration: none;
    }

    &.isWhite {
      background-color: $white;
      color: $blue;
    }

    &.isBlue {
      background-color: $blue;
      color: $white;
    }
  }

</style>
