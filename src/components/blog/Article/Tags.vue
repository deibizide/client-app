<template>
    <div class="row ml-0 mb-4">
        <router-link
            v-for="(tag, index) in tags"
            :key="index"
            :to="{ path: `/blog/${tag}` }"
            class="mr-2 p-2 mb-2 text-center badge-info rounded col-3 col-md-2 col-lg-1"
            >{{ tag }}</router-link
        >
    </div>
</template>

<script>
export default {
    props: ['tags'],
};
</script>

<style></style>
