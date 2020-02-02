<template lang="pug">
  section#services
    .container
      h2.services__title="Psicoterapia baseada em evidencias para ansiedade, pânico, medo, depressão, fobias, problemas de relacionamentos e autoconhecimento."
      p.services__text=`Ser controlado e vencido pelo medo e ansiedade é uma merda. Imagine como sua vida poderia ser diferente se você fosse capaz de superar seus maiores medos e parar de lutar com a ansiedade e depressão.`
      p.services__text=`Faço uso de um processo científico testado e comprovado, que ira te auxiliar construir confiança, compreender e dominar o medo e ansiedade para viver a vida em sua melhor versão, de forma rica, bela e significativa.`
      button-router(text="Comece" link="/servicos" isWhite btnType="router")

</template>

<script>

import ServicesData from '../data/servicesData'
import ButtonRouter from './ButtonRouter'

export default {
  name: 'Services',
  components: {
    ButtonRouter
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
  background-color: $blue;
  min-height: 480px;
  display: flex;
  justify-content: center;
  padding-bottom:  3em;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    margin-top: 1em;

    @include lg-down {
      padding: 2rem;
    }
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
    margin-top: 1em;

    @include lg-down {
      font-size: 24px;
    }
  }
  &__text {
    text-align: left;
    color: $white;
    font-family: $ops;
    font-size: 20px;
  }
}
</style>
