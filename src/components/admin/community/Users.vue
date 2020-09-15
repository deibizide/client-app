<template>
    <div>
        <!-- ERRORS -->
        <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>

        <!-- SEARCH FIELD -->
        <input class="form-control mb-2" v-model="searchQuery" placeholder="Search by email" />

        <!-- OVERVIEW -->
        <transition-group name="fade">
            <table
                class="table border table-hover table-responsive-sm mb-5"
                key="transition-group-0"
                v-if="resultQuery.length > 0"
            >
                <thead>
                    <tr>
                        <th v-for="(column, index) in columns" scope="col" :key="index">
                            {{ column }}
                        </th>
                    </tr>
                </thead>
                <tbody v-if="resultQuery.length > 0">
                    <tr v-for="(user, index) in resultQuery" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td class="d-flex justify-content-between">
                            <select
                                class="custom-select custom-select-sm mr-3"
                                @change="assignCommunity(user.userId, $event)"
                            >
                                <option :selected="!user.ownerOf" disabled>Select a community</option>
                                <option
                                    v-for="(community, index) in communities"
                                    :value="community.slug"
                                    :key="index"
                                    :selected="user.ownerOf && user.ownerOf.includes(community.slug) ? 'selected' : ''"
                                    >{{ community.name }}</option
                                >
                            </select>
                            <button
                                class="btn btn-outline-primary rounded-circle"
                                :class="{
                                    'btn-light': user.ownerOf && user.ownerOf[0] === communityOwners[user.userId],
                                    'button--disabled':
                                        user.ownerOf && user.ownerOf[0] === communityOwners[user.userId],
                                }"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Make user a community admin"
                                @click="addCommunityOwner(user.userId)"
                                :disabled="user.ownerOf && user.ownerOf[0] === communityOwners[user.userId]"
                            >
                                <span v-if="isLoading && currentUser === user.userId">
                                    <Icon icon="spinner" class="fa-spin" />
                                </span>
                                <span v-else>
                                    <Icon
                                        icon="plus"
                                        :class="{
                                            'text-light':
                                                user.ownerOf && user.ownerOf[0] === communityOwners[user.userId],
                                        }"
                                    />
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['users', 'communities'],

    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.users.filter(user => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(' ')
                        .every(value => user.email.toLowerCase().includes(value));
                });
            }
            return [];
        },
    },

    data() {
        return {
            isError: false,
            isLoading: false,

            columns: ['#', 'Name', 'Email', 'Community'],

            currentUser: null,
            searchQuery: null,

            communityOwners: {},
        };
    },

    methods: {
        async addCommunityOwner(userId) {
            const community = this.communityOwners[userId];
            this.currentUser = userId;

            try {
                this.isLoading = true;
                await this.$store.dispatch('DASHBOARD/ADD_COMMUNITY_OWNER', { userId, community });
            } catch (error) {
                this.isError = error;
            } finally {
                this.isLoading = false;
                this.currentUser = null;
            }
        },

        assignCommunity(userId, e) {
            const community = e.target.value;
            this.communityOwners[userId] = community;
        },
    },

    watch: {
        users: {
            handler: function() {
                this.users.forEach(user => {
                    Object.keys(user).forEach(key => {
                        if (key === 'userId') {
                            this.$set(this.communityOwners, user.userId, user.ownerOf ? user.ownerOf[0] : null);
                        }
                    });
                });
            },
        },
    },
};
</script>

<style>
.fade-enter-active {
    transition: all 0.5s ease;
}
.fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
