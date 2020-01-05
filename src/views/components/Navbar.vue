<template lang="pug">
  .nav(:class="{bgWhite: scrollY > 100}")
    .nav__container
      img.nav__logo(src="../../assets/logo.svg", alt="Reale Brothers Logo")
      ul.nav__ul(:class="{isActive: showNav}")
        li.nav__ul__li(@click="scrollTo('#services')")
          .nav__ul__links(href="javascript:void(0)")="Services"
        li.nav__ul__li(@click="scrollTo('#portfolio')")
          .nav__ul__links(href="javascript:void(0)")="Portfolio"
        li.nav__ul__li(@click="scrollTo('#contact')")
          .nav__ul__links(href="javascript:void(0)")="Contact"
      .nav--button(@click="toggleMenu", :class="{ isActive: showNav }")
        span
        span
        span
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      scrollY: 0,
      showNav: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollY = window.scrollY
    },
    toggleMenu () {
      this.showNav = !this.showNav
    },
    scrollTo (selector) {
      this.toggleMenu()
      let el = document.querySelector(selector)
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: el.offsetTop - 100
      })
    }
  }
}
</script>

<style lang="scss">
.nav {
  position: fixed;
  background: none;
  z-index: 199;
  font-family: $cft;
  font-size: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  transition: all 1s;

  &__container {
    display: flex;
    width: 1280px;
    justify-content: space-between;
  }

  &__logo {
    max-width: 150px;
    z-index: 1;
    @include lg-down {
      margin-left: 4em;
    }
  }
  &__ul {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;

    @include lg-down {
      opacity: 0;
      max-height: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      top: 0;
      background-color: white;
      position: fixed;
      height: 100vh;
      width: 100vw;
      font-size: 36px;
      margin: 0;
      transition: all 1s;

      .nav__ul__li {
        margin: .7em 0;
      }

      &.isActive {
        opacity: 1;
        max-height: 100vh;
        transition: all 1s;
      }
    }

    &__li {
      margin: 0 1em;

      div {
        color: $black;
        text-decoration: none;
        font-weight: 700;

        &:visited, &:focus, &:active {
          color: $black;
          text-decoration: none;
        }
      }
    }
  }

  &--button {
    position: absolute;
    right: 4em;
    top: 38px;

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #cdcdcd;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;

      @include lg-up {
        display: none;
      }
    }

    &.isActive {
      span {
        opacity: 1;
        transform: rotate(45deg) translate(-20px, -5px);
        background: #232323;
      }
      span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      span:nth-last-child(2) {
        transform: rotate(-45deg) translate(-15px, -4px);
      }
    }
  }
}

.nav.bgWhite {
  background-color: white;
  transition: all 1s;
}
</style>
