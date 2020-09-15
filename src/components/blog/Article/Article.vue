<template>
    <div>
        <!-- HEADER -->
        <Header :title="post.title" :imgUrl="post.photo" />

        <div v-if="isLoading" class="hmi__loader">
            <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
        </div>
        <div v-else class="container">
            <!-- CONTENT -->
            <h4 class="mb-4 blogpost__header text-muted">{{ post.subtitle }}</h4>
            <div v-html="formatToMarkdown" class="blogpost__content"></div>

            <div class="d-flex align-items-end justify-content-end">
                <!-- DATE -->
                <i class="mr-4 text-muted pt-4">{{ new Date(post.updatedAt).toLocaleDateString() }}</i>
                <!-- SHARE -->
                <ShareButtons :slug="post.slug" :title="post.title" :description="post.description" />
            </div>

            <Resources v-if="post.resources" :resources="post.resources" />
            <Tags v-if="post.tags" :tags="post.tags" />
        </div>
    </div>
</template>

<script>
import Header from '@components/blog/Article/Header';
import ShareButtons from '@components/blog/Article/ShareButtons';
import Resources from '@components/blog/Article/Resources';
import Tags from '@components/blog/Article/Tags';

import parseMarkdown from '@src/js/parseMarkdown';

export default {
    components: {
        Header,
        ShareButtons,
        Resources,
        Tags,
    },

    computed: {
        formatToMarkdown() {
            if (!this.post.content) {
                return;
            }
            return parseMarkdown(this.post.content);
        },
    },

    data() {
        return {
            isLoading: false,

            slug: null,
            post: {},
        };
    },

    methods: {
        async fetchPost() {
            this.isLoading = true;
            try {
                const { data } = await this.$axios.get(`${process.env.VUE_APP_BASE_URL}/blog/posts/${this.slug}`);
                this.post = data;
                this.post.photo = `${process.env.VUE_APP_BASE_URL_ASSETS}/${data.photo}`;
            } catch (error) {
                // this.$router.push({ name: 'blog' });
            } finally {
                this.isLoading = false;
            }
        },
    },

    mounted() {
        this.slug = this.$route.params.slug;
    },

    watch: {
        slug: {
            handler: 'fetchPost',
        },
    },
};
</script>

<style lang="scss">
@import './../../../style/_variables';
.blogpost__header {
    padding-top: 2rem;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        width: 110%;
        height: 1px;
        bottom: -0.5rem;
        left: 0;
        border-bottom: 0.4rem solid $info;
    }
}
.blogpost__content {
    line-height: 2.2;
}
</style>
