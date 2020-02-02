/*eslint-disable no-irregular-whitespace*/
<template>
  <main class="perfil--wrapper">
    <section id="perfil" class="perfil container">
      <div class="container">
        <h1 class="perfil__title">Perfil</h1>
        <div class="perfil__content">
          <h1 class="perfil__content__header">Um pouco sobre mim</h1>
          <p>
            Eu atuo  como psicólogo e facilitador de grupos em Salvador há uns 5 anos e já trabalhei com crianças e adultos de todas as esferas da vida buscando soluções para todos os tipos de problemas diferentes.
          </p>
          <p>
            Mas hoje em dia, só vejo clientes lutando com problemas relacionados ao medo, depressão, relacionamentos e  ansiedade - assim como você - dia após dia.
          </p>
          <p>
            Quando não estou com clientes, passo meu tempo pensando, lendo e falando sobre esses tópicos. Posso dizer que eu sou um pouco obcecado por tudo que é relacionado ao autoconhecimento e desenvolvimento humano.
          </p>
          <p>
            Uma das razões pelas quais eu adoro ajudar os clientes a superar suas lutas com o sofrimento, medo e ansiedade é porque geralmente tem um impacto tão imediato e profundo em sua qualidade de vida.
          </p>
          <p>
            Ao longo desses anos, aperfeiçoei os processos que utilizo para ajudar os clientes a alcançar seus objetivos o mais rápido possível, com base em meus conhecimentos e habilidades aprofundados nessas áreas específicas da psicologia.
          </p>
          <h1 class="perfil__content__header">Minha abordagem pragmática</h1>
          <p>
            Saúde mental é coisa séria.
          </p>
          <p>
            Acredito que apenas aqueles com treinamento suficiente em terapia baseada em evidências e supervisão regular adequada devam tratar as condições de saúde mental.
          </p>
          <p>
            Rejeito a opinião de que emoções normais, como medo e ansiedade, são patológicas e precisam ser "tratadas" com remédios, técnicas ou mudanças no estilo de vida.
          </p>
          <p>
            É claro que pode haver valor na remoção de fontes desnecessárias de angústia, mas  pesquisas mostram claramente que, na maioria das vezes, as tentativas de controlar suas emoções fazem mais mal do que bem e podem acabar causando problemas mais sérios.
          </p>
          <p>
            Minha abordagem ao medo, depressão, problemas de relacionamentos e à ansiedade baseia-se em principios cientificamente comprovados de aprendizado e comportamento encontrados em abordagens como a psicoterapia analítica funcional e terapia de aceitação e compromisso, que possuem centenas de estudos científicos revisados por pares de alta qualidade demonstrando sua eficácia.
          </p>
          <h1 class="perfil__content__header">Coisas chatas (mas importantes)</h1>
          <p>
            Qualificações acadêmicas:
          </p>
          <ul>
            <li>Graduação – Psicologia, (UNIME). Lauro de Freitas –Bahpia.</li>
            <li>Pós-Graduação em Gestão Emocional nas Organizações – Cultivating Emotional Balance
            ALBERT EINSTEIN -Instituto Israelita de Ensino e Pesquisa. Centro de Educação em Saúde Abran Szajman. São Paulo</li>
          </ul>
          <p>Experiencia:</p>
          <ul>
            <li>Facilitador do Projeto N.U.D.H.E.S (Núcleo de Desenvolvimento Humano Extrassensorial e Sensorial, através de Exercícios de Conectividade – Fundação OCIDEMNTE. Salvador/BA</li>
            <li>Facilitador de Workshops em Autoconhecimento e Gestão Sócioemocional.</li>
            <li>Facilitador de Workshops em Saúde – “Cuidando do Cuidador” em Centros de Saúde.</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      sessionToken: String
    }
  }
}
</script>

<style lang="scss">
  main {
    padding-top: 100px;
  }

  #perfil {
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
      width: 80%;
      max-width: 1280px;

      @include lg-down {
        padding: 2rem;
      }
    }
  }
  .perfil {
    &__title {
      color: $blue;
      font-family: $cft;
      font-size: 48px;
    }

    &__content {
      font-size: 20px;
      text-align: left;
      &__header {
        font-family: $cft;
        color: $blue;
      }
    }
  }
</style>
