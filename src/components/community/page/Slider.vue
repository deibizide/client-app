<template>
    <div class="container border rounded pb-4">
        <div class="d-flex justify-content-between">
            <h5 class="hmi__header">Our Community</h5>
            <EditModal modalName="editSlider" :withoutButtons="true" class="py-4 w-auto">
                <!-- IMAGE UPLOAD -->
                <div class="card">
                    <div class="card-body">
                        <button
                            class="d-flex align-items-center justify-content-center btn btn-block btn-info py-2 mb-3"
                            type="button"
                            @click="openUpload"
                        >
                            <Icon icon="images" class="fa-1x" />
                            <span class="pl-3">Add a slider image</span>
                        </button>
                        <div class="community___crop-area__container">
                            <EditPicture
                                :imgUploadMenu="imgUploadMenu"
                                :handleNewImage="handleImgUpload"
                                :isUploadOpen="isUploadOpen"
                                :isImgAdded="isImgAdded"
                                :setIsImgInCrop="setIsImgInCrop"
                            />
                        </div>

                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form class="mt-4">
                                <!-- <div class="card-body text-center border rounded"> -->
                                <div class="form-group position-relative mb-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            class="form-control card-text border rounded"
                                            v-model="newTitle"
                                            maxlength="20"
                                        />
                                        <span class="text-danger position-absolute">{{
                                            errors[0] ? 'This field is required' : ''
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group position-relative mb-">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            class="form-control card-text border rounded"
                                            v-model="newDescription"
                                            maxlength="40"
                                        />
                                        <span class="text-danger position-absolute">{{
                                            errors[0] ? 'This field is required' : ''
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- </div> -->
                            </form>
                        </ValidationObserver>
                    </div>
                    <div class="d-flex justify-content-end mb-3 mr-3">
                        <button
                            @click="saveUpdate"
                            class="btn btn-primary"
                            :disabled="this.areInputsValid && this.isImgInCrop"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <!-- TODO: needs to rely on isSuccess,not on isImgAdded -->
                <SaveStatus v-if="isSuccess !== null" :isSuccess="isSuccess" class="mt-4" />

                <h5 class="mt-5">Community Pictures</h5>
                <!-- IMAGES PREVIEW -->
                <div v-if="images.length" class="d-flex container mt-2">
                    <div class="row justify-content-around">
                        <div v-for="(image, index) in images" :key="index" class="col-12 col-lg-5 card mt-2">
                            <button class="btn text-right p-3" @click="deleteImg(index)">
                                <Icon icon="trash-alt" class="text-primary" />
                            </button>
                            <img class="card-img-top img-fluid rounded" :src="image.src" :alt="`image #${index}`" />
                            <div class="text-center my-3">
                                <h5>{{ image.title }}</h5>
                                <p class="card-text">
                                    {{ image.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </EditModal>
        </div>
        <!-- CAROUSEL -->
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner mt-2">
                <div
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                    v-for="(image, index) in images"
                    :key="index"
                >
                    <!-- TODO: images need to be 500px height, then they layout is ok -->
                    <img class="img-fluid rounded" :src="image.src" :alt="`Slider image #${index}`" />
                    <div class="text-center btn-info py-1 ">
                        <h5 class="pt-2">{{ image.title }}</h5>
                        <p>{{ image.description }}</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
import SaveStatus from '@components/shared/SaveStatus';
import EditModal from '@components/community/EditModal';
import EditPicture from '@components/community/editComponents/EditPicture';

import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
extend('required', {
    ...required,
    message: 'This field is required',
});

export default {
    components: {
        SaveStatus,
        EditModal,
        EditPicture,
        ValidationObserver,
        ValidationProvider,
    },
    computed: {
        areInputsValid() {
            return this.newTitle && this.newTitle !== '' && this.newDescription && this.newDescription !== '';
        },
    },
    data() {
        return {
            imgUploadMenu: 'slider',

            newTitle: '',
            newDescription: '',
            newImage: null,

            isUploadOpen: false,

            isImgAdded: null,
            isSuccess: null,
            isImgInCrop: null,
            isPreviewLoaded: false,

            images: [
                {
                    title: 'Title placeholder',
                    description: 'Description placeholder',
                    src: 'https://picsum.photos/id/1073/800/350',
                },
                {
                    title: 'Title placeholder',
                    description: 'Description placeholder',
                    src: 'https://picsum.photos/id/1033/800/350',
                },
            ],
        };
    },
    methods: {
        openUpload() {
            this.isUploadOpen = !this.isUploadOpen;
        },
        setIsImgInCrop(value) {
            this.isImgInCrop = value;
        },
        handleImgUpload(menu, src) {
            this.newImage = src;
        },
        saveUpdate() {
            // TODO: handle load
            // this.isLoading = true;
            if (!this.areInputsValid || !this.isImgInCrop) {
                return;
            }
            this.isImgAdded = true;
        },
        addNewSlider() {
            // TODO: API call here. Send or the new slide only.
            const body = {
                src: this.newImage,
                title: this.newTitle,
                description: this.newDescription,
            };

            this.isSuccess = true;

            this.images.unshift({ ...body });
            this.resetFields();

            setTimeout(() => {
                this.isSuccess = null;
            }, 2000);
        },
        deleteImg(index) {
            // TODO: by the index get the img id and send an API request to delete it
            this.images.splice(index, 1);
        },
        resetFields() {
            this.newImage = null;
            this.isImgInCrop = null;

            this.newTitle = '';
            this.newDescription = '';

            this.$refs.observer.reset();
        },
    },

    watch: {
        newImage: function() {
            if (this.isImgInCrop) {
                this.addNewSlider();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import './../../../style/_variables';
.community___crop-area__container {
    height: 300px;
    background-color: $light;
}
</style>
