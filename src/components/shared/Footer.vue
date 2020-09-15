<template>
    <footer class="badge-dark">
        <div class="container">
            <div class="row d-flex justify-content-center justify-content-md-between">
                <div class="col-8 col-md-4 mt-5 align-self-center text-center text-md-left order-3 order-md-1">
                    <p class="text-info">
                        <router-link :to="{ name: 'privacy' }" class="text-info">Privacy Policy</router-link>
                    </p>
                    <p class="text-info">
                        <router-link :to="{ name: 'cookies' }" class="text-info">Cookies</router-link>
                    </p>
                    <p class="text-info">
                        <router-link :to="{ name: 'imprint' }" class="text-info">Imprint</router-link>
                    </p>
                </div>
                <div class="col-8 col-md-4 mt-5 align-self-center order-1 order-md-2">
                    <img
                        class="img-fluid"
                        src="images/HMI_logo_full.png"
                        alt="a bigger version of the healthy minds initiative brain logo"
                        aria-hidden="true"
                    />
                </div>
                <div class="col-8 col-md-4 mt-5 align-self-center text-center text-md-right order-2 order-md-3">
                    <p class="text-info mt-4">25925 Barton Rd,</p>
                    <p class="text-info">PO Box 755</p>
                    <p class="text-info">Loma Linda, CA 92354</p>
                    <div class="footer__icons">
                        <a
                            class="text-info"
                            href="https://www.facebook.com/HealthyMindsInitiative/"
                            target="_blank"
                            rel="noopener"
                        >
                            <!-- <Icon icon="arrow-alt-circle-right" /> -->
                            <Icon :icon="['fab', 'facebook-square']" />
                        </a>
                        <a
                            class="text-info ml-3"
                            href="https://www.instagram.com/healthymindsinitiative/"
                            target="_blank"
                            rel="noopener"
                        >
                            <Icon :icon="['fab', 'instagram']" />
                        </a>
                        <a
                            class="text-info ml-3"
                            href="https://www.linkedin.com/in/healthymindsinitiative/"
                            target="_blank"
                            rel="noopener"
                        >
                            <Icon :icon="['fab', 'linkedin']" />
                        </a>
                    </div>
                </div>
                <div class="col-12 order-4 order-md-4">
                    <div class="text-center">
                        <p class="text-info ">&copy; Healthy Minds Initiative {{ year }}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data: function() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped lang="scss">
.footer__icons {
    font-size: 2rem;
}
</style>
