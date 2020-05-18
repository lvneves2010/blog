<template>
  <div class="posts-page">
      <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
          id: '1',
          title: ' The First Post',
          previewText: 'this is  the first post',
          thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/518/613/non_2x/abstract-technology-background-concept-circle-circuit-digital-metal-blue-on-hi-tech-future-design-vector.jpg'
          },
          {
          id: '2',
          title: 'Second Post',
          previewText: 'this is  the second post',
          thumbnail: 'https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png'
          }
        ]
      })
    }, 1500)
  },
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>