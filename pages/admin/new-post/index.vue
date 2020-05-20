<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    methods: {
        onSubmit(postData) {
            this.$store.dispatch( 'addPost', postData )
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
};
</script>

<style scoped>
.admin-new-post-page {
    padding: 30px;
}
.new-post-form {
    width: 90%;
    margin: 10px auto
}

@media (min-width: 768px) {
    .new-post-form {
        width: 90%;
        margin: 10px auto
    }
}
</style>