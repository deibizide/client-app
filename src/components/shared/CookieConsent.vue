<template>
    <div v-if="!isCookieSet && !cookieConsentGiven" class="badge-secondary fixed-bottom">
        <div class="container pt-3">
            <div class="row d-flex">
                <div class="col-12 col-md-8">
                    <p>
                        We use cookies to ensure that we give you the best experience on our website. If you continue to
                        use this site we will assume that you are happy with it.
                    </p>
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end h-100 mb-4 mb-md-0">
                    <button class="btn btn-outline-dark mr-2" @click="setCookie">
                        Ok
                    </button>
                    <router-link :to="{ name: 'privacy' }" class="btn btn-outline-dark" tag="button" type="submit">
                        Privacy
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCookieSet: null,
        };
    },
    methods: {
        setCookie() {
            localStorage.setItem('HealthyMindsInitiative', true);
            this.isCookieSet = true;
        },
    },
    computed: {
        cookieConsentGiven() {
            return localStorage.getItem('HealthyMindsInitiative');
        },
    },
};
</script>
