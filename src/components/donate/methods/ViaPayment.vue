<template>
    <div class="container pb-5">
        <div class="container my-4">
            <h5 class="card-title text-center">How would you like to donate?</h5>
            <div class="row justify-content-center mt-4">
                <router-link
                    :to="{ name: 'donate-credit-card', params: { amount } }"
                    tag="button"
                    type="submit"
                    class="col-10 col-sm-5 col-md-4 col-lg-3 p-4 mr-1 mr-lg-5 mb-1 btn btn-lg btn-outline-primary"
                >
                    <Icon icon="credit-card" class="fa-3x" aria-hidden="true" />
                    <p class="mt-2">Credit Card</p>
                </router-link>
                <router-link
                    :to="{ name: 'donate-visa-checkout', params: { amount } }"
                    tag="button"
                    type="submit"
                    class="col-10 col-sm-5 col-md-4 col-lg-3 p-4 mr-1 mr-lg-5 mb-1 btn btn-lg btn-outline-primary"
                >
                    <Icon :icon="['fab', 'cc-visa']" class="fa-3x" aria-hidden="true" />
                    <p class="mt-2">Visa Checkout</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        amount() {
            return this.$attrs.amount;
        },
    },

    mounted() {
        if (!this.$attrs.amount) {
            this.$router.push({ name: 'donate' });
        }
    },
};
</script>

<style scoped></style>
