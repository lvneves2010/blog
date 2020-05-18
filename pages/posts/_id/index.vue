<template>
  <div class="single-post-page">
      <section class="post">
          <h1 class="post-title">{{loadedPost.title}}</h1>
          <div class="post-details">
            <div class="post-detail">Last Upadted on: {{loadedPost.updatedDate}}</div>
              <div class="post-detail">Writen By: {{loadedPost.author}} </div>
          </div>
          <p class="post-content">{{loadedPost.content}}</p>
      </section>
      <section class="post-feedback">
          <p>Let your comment here <a href="mailto: lvneves2010@gmail.com">lvneves2010@gmail.com</a> </p>
      </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: ' The First Post (Id: ' + context.route.params.id + ')',
          previewText: 'this is  the first post',
          author: 'Leonardo Neves',
          updatedDate: new Date(),
          content: 'Some dummy text thats is not the preview',
          thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/518/613/non_2x/abstract-technology-background-concept-circle-circuit-digital-metal-blue-on-hi-tech-future-design-vector.jpg'
          }
      })
    }, 1500)
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

</style>