<template>
    <transition name="fade">
        <div
            class="alert text-center mb-0"
            :class="isSuccess !== null ? (isSuccess ? 'alert-success' : 'alert-danger') : null"
            role="alert"
            key="isSuccess"
        >
            <span>{{ isSuccess ? 'Successfully added' : `Couldn't save` }}</span>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['isSuccess'],
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
