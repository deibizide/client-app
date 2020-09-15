<template>
    <div class="community-page container">
        <div v-if="isLoading">
            <div class="hmi__loader">
                <Icon icon="spinner" class="fa-spin fa-3x text-primary" />
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <Header
                :name="community.name"
                :logo="community.logo"
                :image="community.image"
                :description="community.description"
            />
            <div class="row my-4">
                <div class="col-12 col-lg-7">
                    <Info :name="community.name" :info="community.info" :email="community.email" />
                    <Slider :images="community.images" />
                </div>
                <div class="col-12 col-lg-5">
                    <Resources :resources="community.resources" />
                </div>
            </div>
            <Feed :name="community.name" :logo="community.logo" :feed="community.feed" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from '@components/community/public/Header';
import Info from '@components/community/public/Info';
import Resources from '@components/community/public/Resources';
import Slider from '@components/community/public/Slider';
import Feed from '@components/community/public/Feed';

export default {
    components: {
        Header,
        Info,
        Resources,
        Slider,
        Feed,
    },

    computed: {
        ...mapGetters('COMMUNITY', ['community']),
    },

    data() {
        return {
            isLoading: false,
            communitySlug: null,
        };
    },

    methods: {
        async getCommunity() {
            try {
                this.$store.dispatch('COMMUNITY/GET_COMMUNITY', this.communitySlug);
            } catch (error) {
                this.$router.push({ name: '404' });
            }
        },
    },

    watch: {
        $route: {
            handler: function() {
                this.isLoading = true;

                this.communitySlug = this.$route.params.communitySlug;
                this.getCommunity();
            },
            immediate: true,
            deep: true,
        },
        community: function() {
            this.isLoading = false;
        },
    },
};
</script>

<style scoped>
.community-page {
    margin-top: 80px;
}
</style>
