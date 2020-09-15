<template>
    <div>
        <div v-if="!communities.length" class="d-flex justify-content-center mt-4">
            <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
        </div>
        <table v-else class="table border table-hover table-responsive-sm mb-5">
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
                <tr v-for="(community, index) in communities" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ community.name }}</td>
                    <td>
                        healthymindsinitiative.org/<span class="font-italic">{{ community.slug }}</span>
                    </td>
                    <td class="text-right">
                        <button
                            class="btn btn-outline-primary mr-md-2 rounded-circle button--edit"
                            type="button"
                            data-toggle="modal"
                            :data-target="`#editCommunity-${community.slug}`"
                        >
                            <Icon icon="edit" />
                        </button>
                    </td>
                    <EditCommunityModal :slug="community.slug" :name="community.name" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditCommunityModal from '@components/admin/community/EditCommunityModal';
export default {
    props: ['communities'],
    components: {
        EditCommunityModal,
    },

    data() {
        return {
            columns: ['#', 'Community', 'Community URL', 'Manage'],
        };
    },
    methods: {
        editCommunity(index) {
            // eslint-disable-next-line no-unused-vars
            const community = this.communities[index];
            // console.log(community);
        },
    },
};
</script>

<style>
.button--edit {
    padding: 6px 9px;
}
</style>
