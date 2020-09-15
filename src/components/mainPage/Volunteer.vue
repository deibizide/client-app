<template>
    <div class="hmi__get-involved hmi__transparent__container pb-5 pt-5" id="volunteer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="title mb-5">
                        <h4 class="hmi__header font-weight-bold">Volunteer</h4>
                    </div>
                    <p>Healthy Minds Initiative (HMI) is active in several communities across the United States.</p>
                    <p>
                        If you’re interested in joining the effort in one of our current communities or starting a
                        conversation about bringing HMI to your community, please fill out the form below to begin a
                        conversation.
                    </p>
                    <p>A member of our team will be back in touch with you as soon as possible.</p>
                </div>
                <div
                    v-if="isSuccess"
                    class="d-flex flex-column justify-content-center align-items-center col-12 col-md-8 py-4 text-center"
                >
                    <Icon icon="check-circle" class="fa-3x text-primary my-5" />
                    <p>Thank you for signing up!</p>
                </div>
                <div v-else class="col-12 col-md-8">
                    <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>
                    <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="onSubmit">
                        <form class="hmi__form__container">
                            <div class="form-row">
                                <div class="form-group col-12 col-md-6">
                                    <Input
                                        name="firstname"
                                        label="First Name"
                                        rules="required"
                                        type="text"
                                        v-model="name"
                                        :disabled="isLoading"
                                    />
                                </div>
                                <div class="form-group col-12 col-md-6">
                                    <Input
                                        name="lastname"
                                        label="Last Name"
                                        rules="required"
                                        type="text"
                                        v-model="lastName"
                                        :disabled="isLoading"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <Input
                                    name="email"
                                    label="Email"
                                    rules="email|required"
                                    type="text"
                                    v-model="email"
                                    :disabled="isLoading"
                                />
                            </div>
                            <div class="form-group">
                                <Input
                                    name="address"
                                    label="Address (Optional)"
                                    type="text"
                                    v-model="address"
                                    :disabled="isLoading"
                                />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label for="interest">How are you interested in helping HMI?</label>
                                    <div class="pb-3">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <textarea
                                                name="interest"
                                                placeholder=""
                                                class="form-control"
                                                rows="3"
                                                v-model="textArea"
                                                :disabled="isLoading"
                                            ></textarea
                                            ><span class="text-danger position-absolute">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <button
                                    class="btn btn-outline-primary btn-block position-relative"
                                    type="button"
                                    @click="onSubmit"
                                    :disabled="isLoading"
                                >
                                    Send
                                    <Icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" />
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            isLoading: false,
            isError: false,
            isSuccess: false,

            name: null,
            lastName: null,
            email: null,
            address: null,
            textArea: null,
        };
    },
    methods: {
        async onSubmit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.isLoading = true;
                this.volunteerFormActiveCampaign();
            }
        },

        volunteerFormActiveCampaign() {
            this.isError = false;
            this.isLoading = true;

            try {
                setTimeout(() => {
                    this.isSuccess = true;
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
