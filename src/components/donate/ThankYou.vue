<template>
    <div class="container pb-5">
        <div class="container my-4">
            <div class="container hmi__payment__container p-5 mt-5 rounded text-center">
                <Icon icon="check-circle" class="fa-4x text-primary mb-4" />
                <h5>Thank you for donating {{ amount }}$ to Healthy Minds Initiative!</h5>

                <br />

                <p class="mt-5">Navigate to:</p>
                <div>
                    <router-link :to="{ name: 'brainFacts' }">Brain Facts</router-link>
                    <router-link :to="{ name: 'blog' }" class="ml-3">Blog</router-link>
                    <router-link :to="{ name: 'research' }" class="ml-3">Research</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('DONATION', ['amount']),
    },
};
</script>

<style scoped></style>
