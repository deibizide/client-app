<template>
    <div>
        <div v-if="!users.length" class="d-flex justify-content-center mt-4">
            <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
        </div>
        <table v-else class="table border table-hover table-responsive-sm mb-5">
            <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>
            <thead>
                <tr>
                    <th
                        v-for="(column, index) in columns"
                        scope="col"
                        :key="index"
                        :class="{ 'text-right pr-4': index === 3 }"
                    >
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.firstName }} {{ user.lastName }}</td>
                    <td>
                        <select class="custom-select custom-select-sm" @change="addCommunityOwner(user.userId, $event)">
                            <option v-if="!user.community" selected disabled>Choose a community</option>
                            <option
                                v-for="(community, index) in communities"
                                :value="community.slug"
                                :key="index"
                                :selected="user.ownerOf && user.ownerOf.includes(community.slug) ? 'selected' : ''"
                                >{{ community.name }}</option
                            >
                        </select>
                    </td>
                    <td class="text-right">
                        <button
                            class="btn btn-outline-primary rounded-circle"
                            @click="removeCommunityOwner(user.userId)"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Remove this user from being the owner of this community"
                        >
                            <Icon v-if="isLoading" icon="spinner" class="fa-spin" />
                            <Icon v-else icon="trash-alt" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['users', 'communities'],

    data() {
        return {
            isLoading: false,
            isError: false,

            columns: ['#', 'Name', 'Community', 'Manage'],
            userCommunity: null,
        };
    },

    methods: {
        addCommunityOwner(userId, e) {
            const community = e.target.value;

            try {
                this.$store.dispatch('DASHBOARD/ADD_COMMUNITY_OWNER', { userId, community });
            } catch (error) {
                this.isError = error;
            }
        },
        removeCommunityOwner() {
            try {
                // this.$store.dispatch('DASHBOARD/', { userId });
            } catch (error) {
                this.isError = error;
            }
            // TODO: remove the flag community Owner!
        },
    },
};
</script>

<style></style>
