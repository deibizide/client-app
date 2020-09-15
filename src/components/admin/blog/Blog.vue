<template>
    <div>
        <div class="container">
            <h4 class="hmi__header font-weight-bold">Blog Dashboard</h4>
            <div class="container mt-4">
                <router-link :to="{ name: 'blog-add' }" class="btn btn-outline-primary ml-n3"
                    >Create new Blog post</router-link
                >
            </div>
            <div v-if="isLoading" class="d-flex justify-content-center mt-4">
                <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
            </div>
            <div class="container mt-4">
                <div class="row d-flex">
                    <div v-for="(post, index) in posts" :key="index" class="col-12 col-sm-6 col-lg-4 mb-4 mt-4 mx-n3">
                        <BlogCard :post="post" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '@components/admin/blog/BlogCard';

export default {
    components: {
        BlogCard,
    },

    data() {
        return {
            isLoading: false,
            posts: [],
        };
    },

    methods: {
        async getPosts() {
            this.isLoading = true;

            try {
                const { data } = await this.$axios.get(`${process.env.VUE_APP_BASE_URL}/blog/posts`);
                this.posts = data.sort((a, b) => b.updatedAt - a.updatedAt);
            } catch {
                this.posts = [];
            } finally {
                this.isLoading = false;
            }
        },
    },

    mounted() {
        this.getPosts();
    },
};
</script>

<style></style>
