<template>
    <div>
        <UserNavBar />
        <div class="page">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
import UserNavBar from '@components/shared/UserNavBar';
import Footer from '@components/shared/Footer';

export default {
    components: {
        UserNavBar,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
@import './../style/_variables';
.page {
    margin-top: 57px;
    min-height: 100vh;
}
</style>
