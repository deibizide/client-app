<template>
    <div class="container">
        <h4 class="hmi__header font-weight-bold">{{ postSlug ? 'Update post' : 'Create new post' }}</h4>
        <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>
        <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="submit">
            <form>
                <!-- TITLE -->
                <div class="form-group mb-5 mt-4">
                    <Input
                        name="title"
                        label="Title"
                        rules="max:70|required"
                        type="text"
                        v-model.trim="post.title"
                        :disabled="isLoading"
                    />
                    <small class="form-text text-muted">The main title of the blog post</small>
                </div>

                <!-- SUBTITLE -->
                <div class="form-group mb-5">
                    <Input
                        name="subtitle"
                        label="Subtitle"
                        type="text"
                        v-model.trim="post.subtitle"
                        :disabled="isLoading"
                    />
                    <small class="form-text text-muted mt-2"
                        >Subtitle will appear under the title, an optional field</small
                    >
                </div>

                <!-- TODO: IMAGE -->
                <div class="form-group mb-5">
                    <label for="adminPhotoPost">Image</label>
                    <input
                        type="file"
                        class="form-control border-0 ml-n2"
                        id="adminPhotoPost"
                        accept="image/png, image/jpeg, image/jpg"
                        @change="savePhoto"
                        ref="photo"
                        name="photo"
                        :disabled="isLoading"
                    />
                    <small class="form-text text-muted"
                        >Choose the main image of the blog post, for better experience choose landscape format. Max file
                        size: 1.2MB.</small
                    >
                    <div v-if="post && post.photo">
                        <p class="mt-3">Current Image</p>
                        <!-- TODO:get the file link -->
                        <img :src="post.photo" :alt="post.title" width="200" class="form-group" />
                    </div>
                </div>

                <!-- DESCRIPTION -->
                <div class="form-group mb-5">
                    <label for="descrition">Short Description</label>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <textarea
                            name="description"
                            id="description"
                            rows="2"
                            class="form-control"
                            v-model="post.description"
                            :disabled="isLoading"
                        ></textarea>
                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <small class="form-text text-muted mt-4"
                        >A short summary which will appear on the main Blog page under the image you provided
                        above.</small
                    >
                </div>

                <!-- CONTENT -->
                <div class="form-group mb-5">
                    <label for="content">Content</label>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <textarea
                            name="content"
                            rows="20"
                            id="content"
                            class="form-control"
                            v-model.trim="post.content"
                            :disabled="isLoading"
                        ></textarea>
                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <small class="form-text text-muted mt-4">The main body of the blog post</small>
                </div>

                <!-- RESOURCES -->
                <div class="form-group mb-5">
                    <label>Resources</label>
                    <div class="d-flex mb-2" v-for="(resource, index) in post.resources" :key="index">
                        <input type="text" :id="index" class="form-control" v-model="post.resources[index]" />
                        <button
                            v-if="resource !== '' || index === 0"
                            class="btn btn-info ml-2"
                            @click="post.resources.push('')"
                            :disabled="isLoading"
                            type="button"
                        >
                            <Icon icon="plus" />
                        </button>
                        <button v-else class="btn btn-info ml-2" @click="post.resources.splice(index, 1)" type="button">
                            <Icon icon="minus" />
                        </button>
                    </div>
                    <small class="form-text text-muted"
                        >Add as many resources as you need and include an "http" or an "https" prefix, an optional
                        field</small
                    >
                </div>

                <!-- TAGS -->
                <div class="form-group">
                    <p>Tags</p>
                    <div
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="form-check form-check-inline p-2 badge-info rounded"
                    >
                        <input
                            type="checkbox"
                            :id="tag"
                            class="form-check-input"
                            :value="tag"
                            name="tags"
                            :checked="post.tags && post.tags.includes(tag)"
                            @change="addTags($event, tag)"
                            :disabled="isLoading"
                        />
                        <label :for="tag" class="form-check-label ml-2">{{ tag }}</label>
                    </div>
                    <small class="form-text text-muted">Choose one or several topics this blog post belongs to</small>
                </div>

                <button
                    class="btn btn-info mr-3 mt-5 mb-3"
                    id="blogPreviewButton"
                    type="button"
                    data-toggle="modal"
                    data-target="#blogPreview"
                >
                    Preview
                </button>
                <button class="btn btn-primary mt-5 mb-3 position-relative" type="submit" :disabled="isLoading">
                    <span :class="{ 'mr-2': isLoading }">Publish</span>
                    <Icon v-if="isLoading" icon="spinner" class="fa-spin" />
                </button>
            </form>
        </ValidationObserver>

        <PreviewModal :post="post" />
    </div>
</template>

<script>
// components
import PreviewModal from '@components/admin/blog/PreviewModal';
// helpers
import parseMarkdown from '@src/js/parseMarkdown';
import { toSlug } from '@src/utils/helpers';
// validator
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});

const POST_URL = `${process.env.VUE_APP_BASE_URL}/blog/posts2`;
const HEADERS = {
    'Content-Type': 'multipart/form-data',
};

export default {
    components: {
        PreviewModal,
        ValidationObserver,
        ValidationProvider,
    },

    computed: {
        titleToSlug() {
            return toSlug(this.post.title);
        },
    },

    data() {
        return {
            isLoading: false,
            isError: false,

            post: {
                title: null,
                subtitle: null,
                description: null,
                content: '',
                photo: null,
                tags: [],
                resources: [''],
            },

            postSlug: null,
            tags: ['nutrition', 'exercise', 'unwind', 'restore', 'optimize', 'lifestyle'],
        };
    },

    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.submitPost();
            }
        },

        async submitPost() {
            this.isLoading = true;

            let postData = new FormData();
            const postSlug = this.postSlug || this.titleToSlug;
            const resources = this.post.resources ? this.post.resources.filter(resource => resource !== '') : [];

            postData.append('title', this.post.title);
            postData.append('subtitle', this.post.subtitle);
            postData.append('description', this.post.description);
            postData.append('content', parseMarkdown(this.post.content));
            postData.append('resources', resources);
            postData.append('tags', this.post.tags);
            postData.append('photo', this.post.photo);

            try {
                await this.$axios.put(`${POST_URL}/${postSlug}`, postData, HEADERS);
                this.$router.push({ name: 'admin-blog' });
            } catch (error) {
                // TODO: keep on the page and ask to retry
                // console.log({ error });
            } finally {
                this.isLoading = false;
            }
        },
        savePhoto() {
            this.post.photo = this.$refs.photo.files[0];
            // console.log(this.$refs.photo.files[0]);
        },

        addTags(e, tag) {
            if (!e.target.checked) {
                const index = this.post.selectedTags.indexOf(tag);
                this.post.tags.splice(index, 1);
                return;
            }
            this.post.tags.push(tag);
        },

        async getBlogPost() {
            this.isLoading = true;
            try {
                const { data } = await this.$axios.get(`${POST_URL}/${this.postSlug}`);
                this.post = data;
                this.post.photo = `${process.env.VUE_APP_BASE_URL_ASSETS}/${data.photo}`;
            } catch (error) {
                // console.log({ error });
            } finally {
                this.isLoading = false;
            }
        },
    },

    mounted() {
        if (this.$route.params.slug) {
            this.postSlug = this.$route.params.slug;
            this.getBlogPost();
        }
    },
};
</script>

<style></style>
