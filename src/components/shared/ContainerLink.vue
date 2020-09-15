<template>
    <div class="container-fluid badge-info mt-4 py-4">
        <div class="container text-center">
            <h4>{{ title }}</h4>
            <p>{{ text }}</p>
            <router-link v-if="link !== 'sherzaiWebsite'" router-link :to="{ name: link, hash: hash }" tag="a">
                <Icon class="fa-2x" icon="arrow-circle-right" />
            </router-link>
            <a v-else href="https://teamsherzai.com/" rel="_noopener" target="_blank">
                <Icon icon="arrow-circle-right" class="fa-2x" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'text', 'link', 'hash'],
};
</script>

<style scoped lang="scss"></style>
