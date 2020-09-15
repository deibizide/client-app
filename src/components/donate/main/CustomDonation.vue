<template>
    <div class="my-4">
        <h4 class="text-dark my-4 text-center">
            Custom Donation
        </h4>
        <h5 class="text-center my-4">Select the specific HMI Community and/or Project you want to support</h5>

        <div v-if="isLoading">
            <div class="hmi__loader">
                <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <CommunityDonation :setCustomSelection="setCustomSelection" />
        <div class="row d-flex justify-content-center mb-4">
            <div class="col-10 col-sm-7 col-md-6 col-lg-4">
                <div v-if="isError" class="badge-danger p-2 mb-4 rounded text-center">
                    {{ isError }}
                </div>
                <div class="d-flex w-100">
                    <div class="input-group-prepend">
                        <div class="input-group-text">$</div>
                    </div>
                    <ValidationObserver class="w-100" ref="observer" v-slot="{ invalid }" @submit.prevent="submit()">
                        <ValidationProvider rules="min_value:0.5|required" v-slot="{ errors }">
                            <input
                                type="number"
                                name="amount"
                                placeholder="0"
                                class="form-control px-2 py-4"
                                v-model="donationAmount"
                            />
                            <span class="text-danger ml-2 position-absolute w-100 error-message">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </ValidationObserver>
                </div>
                <button class="mt-4 w-100 p-2 btn btn-secondary" type="submit" @click="submit" :disabled="isLoading">
                    <Icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" /> <span>CONTINUE</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import CommunityDonation from '@components/donate/main/CommunityDonation';
// validation
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, min_value } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});
extend('min_value', {
    ...min_value,
    message: 'The minimum amount should be 1$',
});

export default {
    components: {
        CommunityDonation,
        ValidationProvider,
        ValidationObserver,
    },
    computed: {
        donationMetadata() {
            if (this.selectedCommunity && this.selectedProject) {
                return {
                    community: this.selectedCommunity,
                    project: this.selectedProject,
                };
            }
            if (this.selectedCommunity) {
                return {
                    community: this.selectedCommunity,
                };
            }
            return undefined;
        },
    },
    data() {
        return {
            isLoading: false,
            isError: false,

            donationAmount: null,
            selectedCommunity: null,
            selectedProject: null,
        };
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.createPayment();
            }
        },
        async createPayment() {
            if (this.isLoading) {
                return;
            }

            this.isLoading = true;
            const amount = Number(this.donationAmount);

            try {
                await this.$store.dispatch('DONATION/CREATE_PAYMENT_INTENT', {
                    amount,
                    metadata: this.donationMetadata,
                });
            } catch (error) {
                this.isError = error;
                this.isLoading = false;
                return;
            }

            this.$router.push({ name: 'donate-credit-card' });
        },
        setCustomSelection(type, name, slug) {
            if (type === 'community') {
                this.selectedCommunity = slug;
                this.selectedCommunityName = name;
            }
            if (type === 'project') {
                this.selectedProject = slug;
                this.selectedProjectName = name;
            }
        },
    },
};
</script>

<style lang="scss">
.error-message {
    left: 10px;
}
</style>
