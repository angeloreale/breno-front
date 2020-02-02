<template>
  <main class="service--wrapper">
    <section id="service" class="service container">
      <div class="container">
        <h1 class="service__title">Serviços</h1>
        <div class="service__item" v-for="(step, i) in stepsData" :key="i">
          <services-step class="service__item__step" :stepNumber="i+1" :stepTitle="step.title" :stepContent="step.content" :stepCtaLink="step.link" :stepCtaText="step.ctaText"></services-step>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ServicesStep from './components/ServiceStep'

export default {
  name: 'Home',
  components: {
    ServicesStep
  },
  data: function () {
    return {
      sessionToken: String
    }
  },
  computed: {
    stepsData () {
      return [
        {
          title: 'Solte-se com uma sessão inicial.',
          content: `<p>Se você está lutando contra o seu sofrimento, sabe como é se sentir preso e oprimido. Deixe-me ajudá-lo a fazer um plano para se libertar brevemente através da tomada de consciência da sua situação.<p>

          <p>A Sessão inicial  é um desmantelamento ultra-simplificado de sua ansiedade, pânico, medo, depressão, problemas de relacionamentos e demais sofrimentos, projetado para revelar os principais processos psicológicos que o deixam infeliz e o mantêm preso.</p>

          <p>Depois de resolver o problema com uma análise da sua situação atual, vou descobrir as etapas necessárias para levá-lo de onde você está para onde você quer estar.</p>

          <p>Após a sessão, você terá uma compreensão clara do problema e minha abordagem para ajudá-lo a resolvê-lo. Assim, você pode decidir por si mesmo se deseja continuar com a Psicoterapia individual para que isso aconteça.</p>

          <p>Uma sessão de início rápido pode ajudar com a maioria das coisas relacionadas ao sofrimento humano, como:</p>

          <ul>
            <li>Depressão</li>
            <li>Falta de sentido de vida</li>
            <li>Problemas de relacionamento</li>
            <li>ataques de pânico / transtorno do pânico</li>
            <li>preocupação excessiva / transtorno de ansiedade generalizada</li>
            <li>ansiedade social / fobia social</li>
            <li>ansiedade de falar em público / desempenho</li>
            <li>fobia por injeção de lesão sanguínea</li>
            <li>fobias de situações (por exemplo, vôo, altura)</li>
            <li>outras fobias específicas</li>
            <li>ansiedade / doença de saúde transtorno de ansiedade</li>
            <li>disfunção sexual relacionada à ansiedade</li>
            <li>insônia ou pesadelos relacionados à ansiedade</li>
            <li>transtorno obsessivo-compulsivo (TOC)</li>
            <li>transtorno de estresse pós-traumático (TEPT)</li>
          </ul>
          `,
          link: '',
          ctaText: 'Agende agora'
        },
        {
          title: '',
          content: '',
          link: '',
          ctaText: 'Agende agora'
        },
        {
          title: '',
          content: '',
          link: '',
          ctaText: 'Agende agora'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  main {
    padding-top: 100px;
  }

  #service {
  position: relative;
  max-width: 100%;
  background-color: $white;
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
      width: 1280px;

      @include lg-down {
        padding: 2rem;
      }
    }
  }
  .service {
    &__title {
      color: $blue;
      font-family: $cft;
      font-size: 48px;
    }

    &__item {
      text-align: left;
    }
  }
</style>
