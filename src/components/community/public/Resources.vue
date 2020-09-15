<template>
    <div class="container border rounded my-4 side-bar resources__container">
        <div class="d-flex">
            <h5 class="hmi__header">Resources</h5>
        </div>
        <div class="col-12 border rounded px-2 my-2 mt-4" v-for="(resource, index) in resources" :key="index">
            <p class="font-weight-bold pt-4">{{ resource.name }}</p>
            <p>{{ resource.description.substring(0, 250) }}...</p>
            <a :href="resource.url">
                <p class="font-weight-bold font-italic"><u>Read More</u></p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['resources'],
};
</script>

<style>
.resources__container {
    overflow: auto;
}
.side-bar {
    max-height: 765px;
    min-height: 812px;
}
</style>
