<template>
    <nav class="community__navbar navbar fixed-top shadow-sm navbar-light p-0">
        <div class="container small d-flex justify-content-between" role="navigation">
            <router-link :to="{ name: 'admin' }" tag="a" class="nav-item px-0 px-lg-2 text-truncate text-capitalize">
                Welcome {{ this.firstName }}!
            </router-link>

            <router-link
                :to="{ name: 'community-edit' }"
                tag="a"
                class="nav-link nav-item px-0 px-lg-2 text-truncate text-capitalize"
            >
                Manage community
            </router-link>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('SESSION', ['firstName']),
    },
};
</script>

<style scoped lang="scss">
@import './src/style/_variables';
nav.navbar {
    background-color: $white;
    border-bottom: 1px solid $primary;
}
.community__navbar {
    z-index: 1035;
}
</style>
