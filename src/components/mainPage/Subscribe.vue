<template>
    <div class="hmi__dark__container pb-5 pt-5" id="subscribe" data-scroll="100">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="title mb-5">
                        <h4 class="hmi__header font-weight-bold">Subscribe</h4>
                    </div>
                    <p>
                        Sign up for our Healthy Minds Initiative newsletter for the latest brain and body health
                        updates.
                    </p>
                </div>

                <div v-if="isSubscribed" class="col-12 col-md-8 py-4 text-center">
                    <Icon icon="check-circle" class="fa-3x text-primary my-5" />
                    <p>Thank you for signing up!</p>
                </div>

                <div v-else class="col-12 col-md-8 py-4">
                    <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>
                    <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="onSubmit()">
                        <div class="hmi__form__container">
                            <div class="form-row">
                                <div class="form-group col-12 col-md-6">
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        rules="required"
                                        type="text"
                                        v-model="firstName"
                                        :disabled="isLoading"
                                    />
                                </div>
                                <div class="form-group col-12 col-md-6">
                                    <Input
                                        name="lastName"
                                        label="Last Name"
                                        rules="required"
                                        type="text"
                                        v-model="lastName"
                                        :disabled="isLoading"
                                    />
                                </div>
                                <div class="form-group d-none">
                                    <label for="verification">Fill this out with a fact</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="verification"
                                        v-model="verificationHidden"
                                    />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-12 col-md-6">
                                    <Input
                                        name="mail"
                                        label="Email"
                                        rules="email|required"
                                        type="text"
                                        v-model="email"
                                        :disabled="isLoading"
                                    />
                                </div>
                                <div class="form-group col-12 col-md-6 mt-4 pt-2">
                                    <button
                                        class="btn btn-outline-primary btn-block position-relative"
                                        type="submit"
                                        @click="onSubmit"
                                        :disabled="isLoading"
                                    >
                                        <Icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" />
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});

export default {
    components: {
        ValidationObserver,
    },

    data() {
        return {
            isLoading: false,
            isError: false,
            isSubscribed: false,

            firstName: null,
            lastName: null,
            email: null,

            verificationHidden: null,
        };
    },

    methods: {
        async onSubmit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.submitContactRequest();
            }
        },
        async submitContactRequest() {
            if (this.verificationHidden) {
                return;
            }

            this.isError = false;
            this.isLoading = true;

            try {
                setTimeout(() => {
                    this.isSubscribed = true;
                }, 2000);
            } catch {
                this.isError = 'There has been an error, please try again';
            } finally {
                setTimeout(() => {
                    this.isLoading = false;
                }, 2000);
            }
        },
    },
};
</script>

<style></style>
