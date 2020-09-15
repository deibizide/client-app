<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center justify-content-md-between">
            <div class="col-11 col-md-8 col-lg-9 mb-md-5">
                <h4 class="hmi__header mb-5">Articles</h4>
                <div v-if="isLoadingPosts" class="d-flex justify-content-center mt-4">
                    <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
                </div>
                <div v-else>
                    <div v-if="!posts || posts.length === 0">
                        <h5>Looks like there are no blogposts yet.</h5>
                    </div>
                    <div v-else>
                        <div v-for="(post, index) in posts" :key="index" class="col-12 mb-5">
                            <Card :post="post" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9 col-md-4 col-lg-3 mb-4">
                <h4 class="hmi__header mb-5">
                    Categories
                </h4>
                <div v-if="isLoadingTags" class="d-flex justify-content-center mt-4">
                    <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
                </div>
                <Tags v-else :tags="tags" :activeTag="activeTag" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@components/blog/Card';
import Tags from '@components/blog/Tags';

export default {
    components: {
        Card,
        Tags,
    },

    data() {
        return {
            isLoadingPosts: false,
            isLoadingTags: false,

            posts: [],
            tags: [],

            activeTag: null,
        };
    },

    methods: {
        async getPosts() {
            this.isLoadingPosts = true;

            try {
                const { data } = await this.$axios.get(`${process.env.VUE_APP_BASE_URL}/blog/posts`);
                this.posts = data.sort((a, b) => b.updatedAt - a.updatedAt);
            } catch (error) {
                this.posts = [];
            } finally {
                this.isLoadingPosts = false;
            }
        },

        async getTags() {
            this.isLoadingTags = true;

            try {
                const { data } = await this.$axios.get(`${process.env.VUE_APP_BASE_URL}/blog`);
                this.tags = data;
            } catch (error) {
                this.tags = [];
            } finally {
                this.isLoadingTags = false;
            }
        },

        setActiveTag() {
            if (this.$route.params && this.$route.params.tag) {
                this.activeTag = this.$route.params.tag;
                this.fetchArticlesPerTag();
                return;
            }
            this.getPosts();
            this.activeTag = null;
        },

        async fetchArticlesPerTag() {
            this.isLoadingPosts = true;

            try {
                const { data } = await this.$axios.get(`${process.env.VUE_APP_BASE_URL}/blog/tags/${this.activeTag}`);
                this.posts = data.sort((a, b) => b.updatedAt - a.updatedAt);
            } catch (error) {
                this.posts = [];
            } finally {
                this.isLoadingPosts = false;
            }
        },
    },

    mounted() {
        this.getTags();
    },

    watch: {
        $route: {
            handler: 'setActiveTag',
            immediate: true,
            deep: true,
        },
    },
};
</script>

<style scoped></style>
