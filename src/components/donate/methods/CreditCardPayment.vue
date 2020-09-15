<template>
    <div class="page">
        <div v-if="isLoading">
            <div class="hmi__loader" id="main-loader">
                <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="container hmi__payment__container p-5 rounded">
            <form @submit.prevent="submit">
                <div v-if="isError" class="row d-flex justify-content-center flex-column-lg">
                    <div class="p-2 text-center rounded badge-danger form-group row col-10 col-md-7 col-xl-5">
                        {{ isError }}
                    </div>
                </div>
                <div class="row d-flex justify-content-center flex-column-lg">
                    <div class="form-group row col-10 col-md-7 col-xl-5">
                        <label type="email" for="cardholder-email" class="col-form-label">Email</label>
                        <input
                            type="text"
                            id="cardholder-email"
                            v-model="email"
                            name="cardholder-email"
                            placeholder="jenny@example.com"
                            required
                            class="form-control StripeElement"
                        />
                    </div>
                </div>

                <div class="row d-flex justify-content-center flex-column-lg">
                    <div class="form-group row col-10 col-md-7 col-xl-5">
                        <label for="cardholder-name" class="col-form-label">Cardholder Name</label>
                        <input
                            type="text"
                            id="cardholder-name"
                            v-model="name"
                            name="cardholder-name"
                            placeholder="Jenny Rosen"
                            required
                            class="form-control StripeElement"
                        />
                    </div>
                </div>
                <div class="row d-flex justify-content-center flex-column-lg">
                    <div class="form-group row col-10 col-md-7 col-xl-5">
                        <label for="card-details" class="col-form-label">Card Details</label>
                        <div id="card-element" class="form-control StripeElement"></div>
                    </div>
                </div>

                <!--  Used to display form errors -->
                <div id="card-errors" class="text-danger text-center mb-3" role="alert"></div>

                <div class="row d-flex justify-content-center flex-column-lg">
                    <button
                        @click="submit"
                        id="card-button"
                        class="form-group col-6 col-md-3 col-xl-3 btn btn-primary btn-lg"
                        data-secret="donation.customerKey"
                        :disabled="isLoading"
                    >
                        Donate {{ amount }}$
                    </button>
                </div>

                <div class="row d-flex justify-content-center text-center">
                    <div class="form-check col-10 col-lg-6">
                        <input type="checkbox" class="form-check-input" required v-model="mandateAcceptance" />
                        <small
                            >I authorise
                            <span class="text-bold">Healthy Minds Initiative </span>
                            to send instructions to the financial institution that issued my card to take a payment of
                            {{ amount }} USD from my card account.
                        </small>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { loadStripeCheckout } from '@src/js/stripe';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isLoading: false,
            isError: false,

            stripe: null,
            elements: null,
            card: null,

            name: null,
            email: null,

            mandateAcceptance: false,
        };
    },
    computed: {
        ...mapGetters('DONATION', ['clientSecret', 'amount']),

        form() {
            return document.getElementById('payment-form');
        },

        style() {
            return {
                base: {
                    fontFamily: 'Montserrat',
                },
            };
        },
    },
    methods: {
        async submit() {
            if (this.isLoading) {
                return;
            }

            if (!this.name || !this.email) {
                this.isError = 'You must fill out the form.';
                return;
            }

            this.isLoading = true;
            try {
                // since we need to use the same instance of Stripe, we won't call the store
                const response = await this.stripe.confirmCardPayment(this.clientSecret, {
                    payment_method: {
                        card: this.elements.getElement('card'),
                        billing_details: {
                            name: this.name,
                            email: this.email,
                        },
                    },
                });

                if (response.paymentIntent.status === 'succeeded') {
                    this.$router.push({ name: 'donate-thank-you' });
                }
            } catch (error) {
                // console.log(error);
                this.isError = error;
            } finally {
                this.isLoading = false;
            }
        },
    },
    async mounted() {
        // TODO: check for this on route change, BEFORE page loads --- ideally in the router.
        if (!this.amount || !this.clientSecret) {
            this.$router.push({ name: 'donate' });
            return;
        }

        loadStripeCheckout(() => {
            this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_KEY);
            this.elements = this.stripe.elements({
                fonts: [
                    {
                        cssSrc: 'https://fonts.googleapis.com/css?family=Montserrat:300',
                    },
                ],
            });
            this.card = this.elements.create('card', { style: this.style });
            this.card.mount('#card-element');
            this.card.addEventListener('change', ({ error }) => {
                const displayError = document.getElementById('card-errors');
                if (error) {
                    displayError.textContent = error.message;
                } else {
                    displayError.textContent = '';
                }
            });
        });
    },
};
</script>

<style scoped lang="scss">
@import './../../../style/_variables';
.StripeElement {
    height: 40px;
    padding: 10px 12px;

    color: $dark;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 4px;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}

.StripeElement--invalid {
    border-color: $danger;
}
</style>
