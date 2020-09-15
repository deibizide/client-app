<template>
    <div class="container border rounded my-4 side-bar resources__container">
        <div class="d-flex">
            <h5 class="hmi__header">Resources</h5>
            <EditModal modalName="editResource" :withoutButtons="true" class="py-4">
                <!-- SLOT -->

                <div class="p-4 border rounded">
                    <div class="position-relative">
                        <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="handleSubmit">
                            <form>
                                <div class="form-group position-relative mb-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            class="form-control border rounded"
                                            v-model="newResource.name"
                                        />
                                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group position-relative mb-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>Description</label>
                                        <textarea
                                            class="form-control textArea border rounded"
                                            id="message-text"
                                            v-model="newResource.description"
                                        ></textarea>
                                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group position-relative mb-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>URL</label>
                                        <input
                                            type="text"
                                            class="form-control border rounded"
                                            v-model="newResource.url"
                                        />
                                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>

                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" type="button" @click="handleSubmit" :disabled="!areInputsValid">
                            Add Resource
                        </button>
                    </div>
                </div>

                <SaveStatus v-if="isSuccess !== null" :isSuccess="isSuccess" class="mt-4" />

                <h5 class="mt-5">Community Resources</h5>
                <small v-if="!resources || resources === []" class="form-text text-muted">No resources yet.</small>
                <div v-else class="border rounded px-4 mt-4" v-for="(resource, index) in resources" :key="index">
                    <div class="resources___item__header">
                        <button class="btn" @click="deleteResource(index)">
                            <Icon icon="trash-alt" class="text-primary" />
                        </button>
                        <p class="font-weight-bold pt-4">{{ resource.name }}</p>
                    </div>
                    <p>{{ resource.description }}...</p>
                    <p class="font-weight-bold font-italic">
                        <u>{{ resource.url }}</u>
                    </p>
                </div>
            </EditModal>
        </div>
        <div class="col-12 border rounded px-2 my-2 mt-4" v-for="(resource, index) in resources" :key="index">
            <p class="font-weight-bold pt-4">{{ resource.name }}</p>
            <p>{{ resource.description.substring(0, 250) }}...</p>
            <a :href="resource.url">
                <p class="font-weight-bold font-italic"><u>Read More</u></p>
            </a>
        </div>
    </div>
</template>

<script>
import SaveStatus from '@components/shared/SaveStatus';
import EditModal from '@components/community/EditModal';

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
        ValidationObserver,
        ValidationProvider,
    },

    computed: {
        areInputsValid() {
            return (
                this.newResource.name &&
                this.newResource.name !== '' &&
                this.newResource.description &&
                this.newResource.description !== '' &&
                this.newResource.url &&
                this.newResource.url !== ''
            );
        },
    },
    data() {
        return {
            isSuccess: null,

            newResource: {
                name: null,
                description: null,
                url: null,
            },
            resources: [
                {
                    name: 'Sleep Apnea and Dementia',
                    description:
                        'Sleep apnea is a common condition that affects more than one billion people worldwide, causing them to stop breathing while they sleep. While sleep apnea is often the subject of many memes and jokes (due to the infamous and conspicuous mask used to treat the condition) it is actually a very serious sleep disorder that can lead to significant health ramifications.',
                    url: 'https://healthymindsinitiative.org/',
                },
                {
                    name: 'Dementia and the African-American Community',
                    description:
                        'Alzheimer’s disease is devastating our aging population at an alarming rate, so much so that there’s been pressure amongst the medical community to declare it a national health crisis. An increasing body of evidence shows that',
                    url: 'https://healthymindsinitiative.org/',
                },
                {
                    name: 'Dementia and the African-American Community',
                    description:
                        'Alzheimer’s disease is devastating our aging population at an alarming rate, so much so that there’s been pressure amongst the medical community to declare it a national health crisis. An increasing body of evidence shows that',
                    url: 'https://healthymindsinitiative.org/',
                },
                {
                    name: 'Genetics Not the Only Factor',
                    description:
                        'A ground-breaking study published by Oxford Academic’s Brain: A Journal of Neurology, and reported by Science Daily, offers new insight into why some people develop Alzheimer’s disease – the most common neurodegenerative disease that affects more than 50 million people worldwide',
                    url: 'https://healthymindsinitiative.org/',
                },
            ],
        };
    },
    methods: {
        async handleSubmit() {
            const isValid = await this.$refs.observer.validate();

            if (isValid) {
                this.addResource();
            }
        },
        // TODO: implement API call here
        addResource() {
            // handle loading
            this.resources.unshift({ ...this.newResource });

            this.isSuccess = true;
            setTimeout(() => {
                this.isSuccess = null;
            }, 2000);
            this.resetFields();
        },
        // TODO: implement API call here
        deleteResource(index) {
            this.resources.splice(index, 1);
        },
        resetFields() {
            this.newResource.name = null;
            this.newResource.description = null;
            this.newResource.url = null;

            this.$refs.observer.reset();
        },
    },
};
</script>

<style>
.resources___item__header {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: space-between;
}
.side-bar {
    max-height: 765px;
    min-height: 812px;
}
.textArea {
    resize: none;
}
.resources__container {
    overflow: auto;
}
span {
    bottom: -20px;
}
</style>
