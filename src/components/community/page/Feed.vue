<template>
    <div class="container border rounded mb-5">
        <div class="d-flex">
            <h5 class="hmi__header mb-4 flex-shrink-0">Our News</h5>
            <EditModal modalName="editFeed" :withoutButtons="true" class="py-4">
                <div class="p-4 border rounded">
                    <div class="position-relative">
                        <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="handleSubmit">
                            <form>
                                <div class="form-group position-relative mb-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label>Message</label>
                                        <textarea
                                            class="form-control border rounded"
                                            id="message-text"
                                            rows="5"
                                            v-model="newFeed.text"
                                        ></textarea>
                                        <span class="text-danger position-absolute">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" type="button" @click="handleSubmit">
                            Add News Update
                        </button>
                    </div>
                </div>

                <SaveStatus v-if="isSuccess !== null" :isSuccess="isSuccess" class="mt-4" />

                <div class="mt-5">
                    <!-- <h5 class="py-3">News</h5> -->
                    <div class="border rounded mt-2" v-for="(post, index) in feed" :key="index">
                        <div class="d-flex align-items-center justify-content-between pt-2 px-2">
                            <h5 class="text-primary font-weight-bold">Update</h5>
                            <button class="btn" @click="deleteItem(index)">
                                <Icon icon="trash-alt" class="text-primary" />
                            </button>
                        </div>
                        <p class="p-2">{{ post.text }}</p>
                    </div>
                </div>
            </EditModal>
        </div>

        <div class="row" v-for="(post, index) in feed" :key="index">
            <div class="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <img width="100" height="100" alt="Logo" :src="logo" class="rounded-circle" />
                <p class="text-primary font-weight-bold mb-0">{{ name }}</p>
                <p class="font-italic small">{{ post.createdAt }}</p>
            </div>
            <div
                class="align-items-center border-bottom col-12 col-md-9 d-flex mb-2 mx-md-4 py-3"
                :class="{ 'border-bottom': feed.length !== index + 1 }"
            >
                <p>{{ post.text }}</p>
            </div>
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
    data() {
        return {
            isSuccess: null,

            newFeed: {
                createdAt: null,
                text: null,
            },

            name: 'HMI Sedona',
            logo:
                'https://www.graphicsprings.com/filestorage/stencils/c78e92c13913b01cbd911f2af49ac982.png?width=100&height=100',

            feed: [
                {
                    createdAt: '12/03/2019',
                    text: `With the new year upon us, there's no better time to start making small lifestyle changes in pursuit of better brain health. If you're looking to limit or cut out cheese from your diet, we have the perfect substitution for you. Our family LOVES this simple and easy to make Cashew Cheese recipe. Even better, it is a true superfood that is high in good fats (polyunsaturated) and high in minerals like zinc, magnesium, copper, manganese, and phosphorous which are important for good brain function.`,
                },
                {
                    createdAt: '19/02/2019',
                    text:
                        'Sleep apnea is a common condition that affects more than one billion people worldwide, causing them to stop breathing while they sleep. While sleep apnea is often the subject of many memes and jokes (due to the infamous and conspicuous mask used to treat the condition) it is actually a very serious sleep disorder that can lead to significant health...',
                },
                {
                    createdAt: '02/02/2019',
                    text:
                        'Alzheimer’s disease is devastating our aging population at an alarming rate, so much so that there’s been pressure amongst the medical community to declare it a national health crisis. An increasing body of evidence shows that African-Americans face a significantly higher risk for forms of dementia compared to non-Hispanic white populations....',
                },
                {
                    createdAt: '04/05/2019',
                    text:
                        'Using a rat model, researchers identified a specific circuit in the brain that alters food impulsivity by focusing on “a subset of brain cells that produce a type of transmitter in the hypothalamus called melanin concentrating hormone (MCH).” While previous research has shown that elevating MCH levels in the brain can increase food intake, this study is the first to show that MCH also plays a role in impulsive behavior. This is extremely exciting information, because by altering our food impulsivity, scientists have created the possibility of someday developing techniques to address obsessive overeating.',
                },
            ],
        };
    },
    methods: {
        async handleSubmit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.addNewItem();
            }
        },
        // TODO: add API here
        addNewItem() {
            // TODO: handle load
            this.feed.unshift({
                text: this.newFeed.text,
                createdAt: new Date().toLocaleDateString(), // probably will be crated on the api side
            });

            this.isSuccess = true;

            setTimeout(() => {
                this.isSuccess = null;
            }, 2000);

            this.resetFields();
        },
        // TODO: add API call here as well
        deleteItem(index) {
            this.feed.splice(index, 1);
        },
        resetFields() {
            this.newFeed.text = null;
            this.$refs.observer.reset();
        },
    },
};
</script>

<style></style>
