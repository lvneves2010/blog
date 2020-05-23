<template>
  <div class="home-page">
    <section class="intro">
      <h1 class="intro-content">Blog para web development </h1>
      <p class="intro-content" >Olá! seja bem vindo ao meu blog. Aqui você vai encontrar matérias e posts úteis para web development.</p>
      <p class="intro-content">Também encontrará as novidades do segmento</p>
      <p class="intro-content" >A intenção será de reunir artigos interessantes sobre desenvolvimento Front-end Back-end e Bancos de Dados:</p>
      <ul class="intro-content" >
        <li>Angular.</li>
        <li>React JS.</li>
        <li>Vue JS.</li>
        <li>Material.</li>
        <li>Bootstrap.</li>
        <li>CSS/SASS.</li>
      </ul>
      <ul class="intro-content" >
        <li>Node JS.</li>
        <li>Django.</li>
        <li>Express.</li>
        <li>Mongo DB.</li>
        <li>PostgreSQL.</li>
        <li>DBaaS (cloud).</li>
      </ul>
      <p class="intro-content">Veja abaixo os últimos posts com dicas para um bom desenvolvimento de aplicações web.</p>
    </section>
    <PostList :posts="loadedPosts" />
    <section class="intro">
      <p class="intro-content">O nosso acervo de artigos sempre  estará procurando a sintonia com as tendêcias de inovação.</p>
      <p class="intro-content">O intuito é proporcionar um excelente blog para web development.
      <p class="intro-content">Por isso estaremos regularmente postando os artigos mais interessantes para o nosso segmento.</p>
      <p class="intro-content">O nosso objetivo é de orientar no desenvolvimento web e no planejamento do seu site.</p>
      <p class="intro-content">Procuramos abordar As boas práticas e a otimização para mecanismos de busca ( SEO ).</p>
      <p class="intro-content">Nosso blog também  servirá para auxiliar as pessoas que buscam inforamções mais básicas.</p>
      <p class="intro-content">como colocar na web um site poderoso e com otimização para atender as necessidades dos usuários é um exemplo.</p>
      <p class="intro-content" style="display: block; text-align: center;" >Visite Também o &nbsp;<a href="https://leon-neves-resume.mybluemix.net/">meu perfil profissional</a>&nbsp; onde poderá encontrar todas as minhas especialidades.</p>
      <p class="intro-content">Aproveite sua visita!!! espero que goste!!</p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>
.intro {
  min-height: 400px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  background-image: url('~assets/images/desktop.jpeg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: relative;
  top: 5%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

.intro-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

ul.intro-content {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}

@media (max-width: 610px) {
  ul.intro-content {
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
