<template>
    <div class="page">
        <div class="error__page pt-lg-5">
            <div class="container text-center">
                <h2 class="display-4">That page doesn't exist!</h2>
                <p class="lead">Sorry, the page you were looking for could not be found.</p>
                <p class="mt-5">
                    But! You could navigate to one of the other pages:
                </p>
                <router-link
                    v-for="link in links"
                    :key="link"
                    :to="{ name: link.toLowerCase() }"
                    class="font-weight-bold ml-3 router-link-active text-primary"
                    >{{ link }}</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: ['Home', 'Blog', 'Donate'],
        };
    },
};
</script>

<style scoped></style>
