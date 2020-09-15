<template>
    <div class="modal fade" id="blogPreview" tabindex="-1" role="dialog" aria-labelledby="Preview" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="container">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ post.title }}</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"> &times;</span>
                        </button>
                    </div>
                    <div class="container py-2">
                        <h4 class="mb-4 blogpost__header text-muted">{{ post.subtitle }}</h4>
                        <!-- CONTENT -->
                        <div v-html="formatToMarkdown" class="blogpost__content"></div>
                        <Resources v-if="post.resources && post.resources !== []" :resources="post.resources" />
                        <Tags v-if="post.selectedTags" :tags="post.selectedTags" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Resources from '@components/blog/Article/Resources';
import Tags from '@components/blog/Article/Tags';

import parseMarkdown from '@src/js/parseMarkdown';
export default {
    props: ['post'],

    components: {
        Resources,
        Tags,
    },

    computed: {
        formatToMarkdown() {
            if (!this.post.content) return;
            return parseMarkdown(this.post.content);
        },
    },
};
</script>

<style></style>
