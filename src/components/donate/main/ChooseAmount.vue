<template>
    <div>
        <h4 class="text-dark pt-4 pb-4 text-center mt-5">
            Help fund our efforts to eradicate brain disease with a tax-deductible donation today.
        </h4>
        <h5 class="text-center my-4">Choose an amount you wish to donate today</h5>
        <div v-if="isLoading">
            <div class="hmi__loader">
                <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="row justify-content-center mb-lg-4">
            <AmountButton
                v-for="amount in defaultDonationAmounts"
                :key="amount"
                :value="amount"
                :eventHandler="submitAmount"
                :disabled="isLoading"
            />
        </div>
        <br />
    </div>
</template>

<script>
import AmountButton from '@components/donate/AmountButton';

export default {
    components: {
        AmountButton,
    },
    data() {
        return {
            isLoading: false,
            defaultDonationAmounts: [10, 25, 50, 100, 250, 500, 1000],
        };
    },

    methods: {
        async submitAmount(e) {
            if (this.isLoading) {
                return;
            }

            this.isLoading = true;
            const amount = Number(e.target.value);

            try {
                await this.$store.dispatch('DONATION/CREATE_PAYMENT_INTENT', { amount });
            } catch (error) {
                this.isError = error;
                this.isLoading = false;
                return;
            }

            this.$router.push({ name: 'donate-credit-card' });
        },
    },
};
</script>
