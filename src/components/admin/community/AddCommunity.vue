<template>
    <div>
        <div v-if="isError" class="badge-danger mb-3 p-2 rounded text-center">Error: {{ isError }}</div>
        <table class="table border table-responsive-md mb-5">
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" scope="col" :key="index">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" class="form-control" id="community-name" v-model.trim="communityName" /></td>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            id="community-slug"
                            aria-describedby="url-prefix"
                            v-model.trim="communitySlug"
                        />

                        <p class="small text-black-50 mt-2">
                            healthymindsinitiative.org/<span v-if="communitySlug" class="font-italic">{{
                                communitySlug | slugify
                            }}</span>
                        </p>
                    </td>
                    <td class="text-right">
                        <button
                            class="btn btn-outline-primary rounded-circle"
                            :class="{ 'btn-light': isButtonDisabled, 'button--disabled': isButtonDisabled }"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Add community"
                            @click="addCommunity"
                            :disabled="isButtonDisabled"
                        >
                            <span v-if="!isLoading">
                                <Icon icon="plus" :class="{ 'text-light': isButtonDisabled }" />
                            </span>
                            <span v-if="isLoading">
                                <Icon icon="spinner" class="fa-spin" />
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { toSlug } from '@src/utils/helpers';
export default {
    props: ['communities'],

    filters: {
        slugify: function(value) {
            return toSlug(value);
        },
    },

    computed: {
        isButtonDisabled() {
            if (!this.communityName || !this.communitySlug) {
                return true;
            }
            return false;
        },
    },

    data() {
        return {
            isLoading: false,
            isError: false,

            communityName: null,
            communitySlug: null,

            columns: ['Community Name', 'Community URL', ''],
        };
    },
    methods: {
        // TODO: move this to store, needs to be used in edit community modal as well
        checkDuplicates(newCommunity) {
            const nameExists = this.communities.find(community => community.name === newCommunity.name);
            const slugExists = this.communities.find(community => community.slug === newCommunity.slug);

            if (nameExists || slugExists) {
                return true;
            }

            return false;
        },
        // TODO: move this to store, needs to be used in edit community modal as well
        async addCommunity() {
            this.isError = false;

            if (!this.communityName || !this.communitySlug) {
                return;
            }

            const community = {
                name: this.communityName,
                slug: toSlug(this.communitySlug),
            };

            if (this.checkDuplicates(community)) {
                this.isError = 'Looks like these names are already taken!';
                return;
            }

            this.isLoading = true;

            try {
                await this.$store.dispatch('DASHBOARD/ADD_COMMUNITY', {
                    ...community,
                });

                this.communityName = null;
                this.communitySlug = null;
            } catch (error) {
                this.isError = error;
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style></style>
