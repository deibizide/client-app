<template>
    <div class="card">
        <!-- MAIN IMAGE -->
        <router-link :to="{ name: 'blog-article', params: { slug: post.slug } }">
            <img
                :src="photoUrl"
                :alt="`A background photo for the post ${post.title}`"
                id="blogpostCardImg"
                class="card-img-top border-bottom img-responsive"
            />
        </router-link>

        <div class="card-body p-4">
            <!-- TITLE -->
            <div class="d-flex justify-content-between">
                <h4 class="card-title">
                    {{ post.title }}
                </h4>
                <p class="small font-italic text-muted">
                    {{ new Date(post.updatedAt).toLocaleDateString() }}
                </p>
            </div>

            <!-- DESCRIPTION -->
            <p class="text-muted">
                {{ post.description ? post.description.substring(0, 350) : `A blog post about "${post.title}"` }}...
            </p>

            <!-- LINK -->
            <router-link :to="{ path: `/blog/article/${post.slug}` }">
                <p>
                    Read more
                    <Icon icon="arrow-right" class="ml-2 hmi__animation__bounce-right" />
                </p>
            </router-link>

            <!-- POST TAGS -->
            <div class="d-flex flex-wrap">
                <small v-for="(tag, index) in post.tags" :key="index" class="p-2 mr-2 mb-2 badge-info rounded">
                    {{ tag }}
                </small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],

    computed: {
        photoUrl() {
            return `${process.env.VUE_APP_BASE_URL_ASSETS}/${this.post.photo}`;
        },
    },
};
</script>

<style scoped>
.hmi__animation__bounce-right {
    -moz-animation: bounce-right 2s infinite;
    -webkit-animation: bounce-right 2s infinite;
    animation: bounce-right 2s infinite;
}
</style>
