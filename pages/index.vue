<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  // created() {
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {
  //       id: '1',
  //       title: ' The First Post',
  //       previewText: 'this is  the first post',
  //       thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/518/613/non_2x/abstract-technology-background-concept-circle-circuit-digital-metal-blue-on-hi-tech-future-design-vector.jpg'
  //       },
  //       {
  //       id: '2',
  //       title: 'Second Post',
  //       previewText: 'this is  the second post',
  //       thumbnail: 'https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png'
  //       }
  //     ]
  //   }, 1500)
  // }
}
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/desktop.jpeg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
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
