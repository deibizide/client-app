<template>
    <div id="app">
        <transition-group name="fade">
            <component :is="layout" key="transition-child-app-0">
                <router-view />
            </component>
        </transition-group>
        <ScrollToTop />
        <CookieConsent />
        <PopUp />
    </div>
</template>

<script>
// components
import ScrollToTop from '@components/shared/ScrollToTop';
import CookieConsent from '@components/shared/CookieConsent';
import PopUp from '@components/shared/PopUp';
// default layout
const defaultLayout = 'loading';

export default {
    components: {
        ScrollToTop,
        CookieConsent,
        PopUp,
    },

    computed: {
        layout() {
            return (this.$route.meta.layout || defaultLayout) + 'Layout';
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
