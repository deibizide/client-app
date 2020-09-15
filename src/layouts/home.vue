<template>
    <div>
        <CommunityNavBar v-if="isCommunityOwner" />
        <NavBar :isCommunityNavbar="isCommunityOwner" />
        <slot />
        <Footer />
        <button
            @click="signForPopUp"
            class="d-none"
            ref="popupButton"
            data-target="#marketingPopup"
            data-toggle="modal"
        ></button>
        <SideMenu />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CommunityNavBar from '@components/shared/CommunityNavBar';
import NavBar from '@components/shared/NavBar';
import Footer from '@components/shared/Footer';
import SideMenu from '@components/shared/SideMenu';

export default {
    components: {
        NavBar,
        Footer,
        SideMenu,
        CommunityNavBar,
    },

    computed: {
        ...mapGetters('SESSION', ['accountRoles', 'showPopup']),
        isCommunityOwner() {
            return this.accountRoles.includes('communityOwner');
        },
        isAuth() {
            return this.$route.meta.auth;
        },
    },

    data() {
        return {
            popupTimeout: null,
        };
    },

    methods: {
        signForPopUp() {
            const button = this.$refs['popupButton'];
            if (button) {
                button.click();
            }
        },
    },
    watch: {
        $route: {
            handler: function() {
                clearTimeout(this.popupTimeout);
                // we don't want to show popup on auth pages...
                if (this.isAuth) return;

                const signedForPopup = localStorage.getItem('shopping-list');

                if (this.showPopup && !signedForPopup) {
                    this.popupTimeout = setTimeout(() => {
                        this.signForPopUp();
                        this.$store.dispatch('SESSION/SET_POPUP_STATE', false);
                    }, 5000);
                }
            },
            immediate: true,
        },
    },
};
</script>

<style></style>
