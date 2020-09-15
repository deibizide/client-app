<template>
    <div
        class="card blogcard__img"
        :style="{
            'background-image': `url('${photoUrl}')`,
        }"
    >
        <div class="blogcard__body p-3 d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ post.title.substring(0, 25) }}...</h5>
            <p class="small">{{ post.description ? post.description.substring(0, 150) : '' }}...</p>
            <h6>Tags</h6>
            <p v-if="post.tags" class="small">
                <span class="mr-2" v-for="(tag, index) in post.tags" :key="index">{{ tag }}</span>
            </p>
            <p v-else class="small">
                <span class="mr-2 font-italic">No tags selected</span>
            </p>
            <div class="d-flex flex-wrap flex-md-row flex-column mt-4">
                <router-link
                    :to="{ path: `/blog/article/${post.slug}` }"
                    class="btn btn-sm btn-outline-secondary mr-md-2 mt-2"
                    >View</router-link
                >
                <router-link
                    :to="{ path: `/admin/blog/edit/${post.slug}`, params: { post: post } }"
                    class="btn btn-sm btn-outline-info mr-md-2 mt-2"
                    >Edit</router-link
                >
                <button
                    class="btn btn-sm btn-outline-danger ml-md-auto mt-2"
                    type="button"
                    data-toggle="modal"
                    :data-target="`#deleteBlogPostModal-${post.slug}`"
                >
                    Delete
                </button>
            </div>
        </div>
        <ConfirmModal
            :confirmDelete="deletePost"
            :title="post.title"
            :slug="post.slug"
            :isLoading="isLoading"
            :closeModal="closeModal"
        />
    </div>
</template>

<script>
import ConfirmModal from '@components/admin/blog/ConfirmModal';

const POST_URL = `${process.env.VUE_APP_BASE_URL}/blog/posts`;
const HEADERS = {
    'Content-Type': 'application/json',
};

export default {
    props: ['post'],

    components: {
        ConfirmModal,
    },

    computed: {
        photoUrl() {
            return `${process.env.VUE_APP_BASE_URL_ASSETS}/${this.post.photo}`;
        },
    },

    data() {
        return {
            closeModal: false,
            isLoading: false,
        };
    },

    methods: {
        async deletePost() {
            this.isLoading = true;

            try {
                await this.$axios.delete(`${POST_URL}/${this.post.slug}`, HEADERS);
            } finally {
                this.isLoading = false;
                this.closeModal = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.blogcard__img {
    height: 350px;
    overflow: hidden;
}
.blogcard__body {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    height: 350px;
    width: 100%;
}
</style>
