<template>
    <div>
        <router-link
            :to="{ name: 'blog' }"
            tag="a"
            :class="!activeTag ? 'btn-dark' : 'btn-info'"
            class="btn mr-2 mb-2 d-flex justify-content-between"
        >
            Main blog
        </router-link>
        <router-link
            v-for="(tag, index) in blogTags"
            :key="index"
            :to="{ path: `/blog/${tag.name}` }"
            tag="a"
            :class="activeTag && activeTag === tag.name ? 'btn-dark' : 'btn-info'"
            class="btn mr-2 mb-2 d-flex justify-content-between"
        >
            <span class="mr-3">{{ tag.name }}</span>
            <span class="ml-auto">|</span>
            <span class="ml-3">{{ tag.count }}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['tags', 'activeTag'],

    computed: {
        blogTags() {
            let tags = [];

            for (let tag in this.tags) {
                tags.push({
                    name: tag,
                    count: this.tags[tag],
                });
            }

            return tags;
        },
    },
};
</script>

<style></style>
