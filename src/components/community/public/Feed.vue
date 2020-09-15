<template>
    <div class="container border rounded mb-5">
        <h5 class="hmi__header w-100">Our News</h5>

        <div class="row" v-for="(post, index) in feed" :key="index">
            <div class="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <img width="100" height="100" alt="Logo" :src="logo" class="rounded-circle" />
                <p class="text-primary font-weight-bold mb-0">{{ name }}</p>
                <p class="font-italic small">{{ post.createdAt }}</p>
            </div>
            <div
                class="align-items-center border-bottom col-12 col-md-9 d-flex mb-2 mx-md-4 py-3"
                :class="{ 'border-bottom': feed.length !== index + 1 }"
            >
                <p>{{ post.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['feed', 'name', 'logo'],
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
