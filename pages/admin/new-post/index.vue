<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm />
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