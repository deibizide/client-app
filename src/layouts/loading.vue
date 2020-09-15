<template>
    <div>
        <NavBar />
        <div class="page d-flex justify-content-center">
            <Icon icon="spinner" class="initial-spinner fa-spin fa-4x text-primary" />
        </div>
        <Footer />
    </div>
</template>

<script>
import NavBar from '@components/shared/NavBar';
import Footer from '@components/shared/Footer';

export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style>
.initial-spinner {
    margin-top: 320px;
}
</style>
