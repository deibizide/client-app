<template>
    <div
        class="modal fade"
        :id="`editCommunity-${slug}`"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Preview"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div>
                    <div class="modal-header">
                        <h5 class="pt-2 pl-2">
                            Viewing
                            <span class="text-primary font-italic">{{ name }}</span>
                        </h5>
                    </div>
                    <div class="container p-4">
                        <h5 class="mb-4">Community</h5>
                        <div class="row">
                            <div class="form-group col-12 col-md-5">
                                <label>Name</label>
                                <input type="text" class="form-control" v-model.trim="communityName" />
                            </div>
                            <div class="form-group col-12 col-md-5">
                                <label>Slug</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-describedby="url-prefix"
                                    v-model.trim="communitySlug"
                                />
                                <p class="small text-black-50 mt-2">
                                    healthymindsinitiative.org/<span v-if="communitySlug" class="font-italic">{{
                                        communitySlug | slugify
                                    }}</span>
                                </p>
                            </div>
                            <div class="form-group col-md-1 mt-4 pt-2">
                                <button
                                    class="btn btn-outline-primary rounded-circle"
                                    :class="{ 'btn-light': isButtonDisabled, 'button--disabled': isButtonDisabled }"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Add project"
                                    @click="addProject"
                                    :disabled="isButtonDisabled"
                                >
                                    <span v-if="!isLoading">
                                        <Icon icon="plus" :class="{ 'text-light': isButtonDisabled }" />
                                    </span>
                                    <span v-if="isLoading">
                                        <Icon icon="spinner" class="fa-spin" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="container p-4">
                        <h5 class="mb-4">Projects</h5>
                        <div class="form-group">
                            <div class="row d-flex align-items-end">
                                <div class="form-group col-12 col-md-5">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model.trim="projectName" />
                                </div>
                                <div class="form-group col-12 col-md-5">
                                    <label>Slug</label>
                                    <input type="text" class="form-control" v-model.trim="projectSlug" />
                                </div>
                                <div class="form-group col-md-1">
                                    <button
                                        class="btn btn-outline-primary rounded-circle"
                                        :class="{ 'btn-light': isButtonDisabled, 'button--disabled': isButtonDisabled }"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Add project"
                                        @click="addProject"
                                        :disabled="isButtonDisabled"
                                    >
                                        <span v-if="!isLoading">
                                            <Icon icon="plus" :class="{ 'text-light': isButtonDisabled }" />
                                        </span>
                                        <span v-if="isLoading">
                                            <Icon icon="spinner" class="fa-spin" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p class="mb-2 text-black-50">Existing</p>
                    </div>
                    <div class="container p-4 text-right mt-2 d-flex justify-content-between">
                        <div>
                            <router-link
                                :to="{ path: `${slug}` }"
                                class="btn btn-sm btn-outline-primary mr-sm-2"
                                data-dismiss="modal"
                                >View Public Page</router-link
                            >
                            <router-link
                                :to="{ path: `/community-edit/${slug}` }"
                                class="btn btn-sm btn-outline-primary"
                                data-dismiss="modal"
                                >Edit Public Page</router-link
                            >
                        </div>
                        <div>
                            <button
                                v-if="!isCommunityLive"
                                class="btn btn-sm btn-success"
                                @click="toggleLiveStatus(true)"
                            >
                                Go Live
                            </button>
                            <button
                                v-if="isCommunityLive"
                                class="btn btn-sm btn-danger"
                                @click="toggleLiveStatus(false)"
                            >
                                Go Offline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { toSlug } from '@src/utils/helpers';

export default {
    props: ['name', 'slug'],

    filters: {
        slugify: function(value) {
            return toSlug(value);
        },
    },
    computed: {
        ...mapGetters('DASHBOARD', ['communityOwners']),

        isButtonDisabled() {
            if (!this.communityName || !this.communitySlug) {
                return true;
            }
            return false;
        },
    },

    data() {
        return {
            isLoading: false,
            isError: false,
            // TODO: have this flag in the DB
            isCommunityLive: false,

            communitySlug: null,
            communityName: null,
            // TODO: also get current projects (store or props, don't know yet)
            projectName: null,
            projectSlug: null,
        };
    },

    methods: {
        toggleLiveStatus(value) {
            this.isCommunityLive = value;

            // if (value) {
            //     console.log('Go live!');
            // } else {
            //     console.log('Go offline!');
            // }
        },

        addProject() {
            // console.log('addProject');
        },
    },

    watch: {
        slug: {
            handler: function(value) {
                this.communitySlug = value;
            },
            immediate: true,
        },
        name: {
            handler: function(value) {
                this.communityName = value;
            },
            immediate: true,
        },
    },
};
</script>

<style></style>
