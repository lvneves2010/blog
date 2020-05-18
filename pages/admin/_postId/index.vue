<template>
  <div class="admin-post-page">
      <section class="update-form">
        <AdminPostForm :post="loadedPost" />
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost : {
                author: 'Leonardo neves',
                title: 'Example Post',
                Content: 'Content for the example Post',
                thumbnailLink: 'https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png'
            }
        }
    }
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>