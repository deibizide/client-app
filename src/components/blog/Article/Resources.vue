<template>
    <div class="mb-5">
        <h5 class="blogpost__header mt-4">Resources</h5>

        <ol class="list-unstyled">
            <li v-for="(resource, index) in resources" :key="index">
                <a :href="resource.trim()" target="_blank" rel="noopener">{{ index + 1 }}. {{ resource.trim() }} </a>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props: ['resources'],
};
</script>

<style></style>
