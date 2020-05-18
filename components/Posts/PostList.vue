<template>
    <section class="post-list">
      <PostPreview 
      id="1"
      :is-admin="isAdmin"
      title="Hello there"
      previewText="First Post"
      thumbnail="https://static.vecteezy.com/system/resources/previews/000/518/613/non_2x/abstract-technology-background-concept-circle-circuit-digital-metal-blue-on-hi-tech-future-design-vector.jpg"/>
      <PostPreview 
      id="2"
      :is-admin="isAdmin"
      title="Hi there"
      previewText="Second Post"
      thumbnail="https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin : {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>