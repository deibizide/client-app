<template>
    <div class="page d-flex justify-content-center align-items-center my-n1">
        <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('SESSION', ['isLoggedIn']),
    },

    async mounted() {
        if (this.isLoggedIn) {
            await this.$store.dispatch('SESSION/LOGOUT');
            setTimeout(() => {
                this.$router.push({ name: 'home' });
            }, 2000);
        } else {
            return this.$router.push({ name: 'home' });
        }
    },
};
</script>

<style></style>
