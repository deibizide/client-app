<template>
    <div class="container pb-4">
        <div class="title mb-5">
            <h4 class="hmi__header font-weight-bold">Dashboard</h4>
            <p class="text-center">Welcome! This is the admin zone</p>
        </div>
        <div>
            <h4 class="hmi__header font-weight-bold">Users</h4>
            <div class="container mt-4 mb-5">
                <h6 class="text-black-50 my-3">Assign a community owner</h6>
                <Users :users="users" :communities="communities" />
            </div>
        </div>
        <div>
            <h4 class="hmi__header font-weight-bold">Communities</h4>
            <div class="container my-4">
                <h6 class="text-black-50 my-3">Add community</h6>
                <AddCommunity :communities="communities" />
            </div>
            <div class="container my-4">
                <h6 class="text-black-50 my-3">Communities overview</h6>
                <Communities :communities="communities" />
            </div>
        </div>
    </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex';
// components
import Users from '@components/admin/community/Users';
import AddCommunity from '@components/admin/community/AddCommunity';
import Communities from '@components/admin/community/Communities';

export default {
    components: {
        Users,
        AddCommunity,
        Communities,
    },

    computed: {
        ...mapGetters('DASHBOARD', ['communities', 'users', 'communityOwners']),
    },

    mounted() {
        this.$store.dispatch('DASHBOARD/GET_USERS');
        this.$store.dispatch('DASHBOARD/GET_COMMUNITIES');
    },
};
</script>

<style></style>
