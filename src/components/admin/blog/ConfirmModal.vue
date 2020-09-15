<template>
    <div
        class="modal fade"
        :id="`deleteBlogPostModal-${slug}`"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deletePostModal"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div v-if="closeModal" class="modal-content">
                <div class="modal-body text-center pt-4">
                    <Icon icon="check-circle" class="fa-4x text-primary mb-4" />
                    <h5 class="mr-2">
                        Blog post was successfully deleted!
                    </h5>
                </div>
            </div>
            <div v-else class="modal-content">
                <div class="modal-body text-center pt-4">
                    <h5 class="mr-2">
                        Are you sure you want to delete
                        <br />
                        <span class="font-weight-bold">{{ title }}</span>
                        ?
                    </h5>
                    <Icon v-if="isLoading" icon="spinner" class="fa-spin" />
                </div>
                <div class="modal-footer d-flex">
                    <button
                        class="btn btn-outline-primary col"
                        type="button"
                        data-dismiss="modal"
                        :disabled="isLoading"
                    >
                        Cancel
                    </button>
                    <button
                        class="btn btn-outline-danger mr-2 col"
                        type="button"
                        @click="confirmDelete"
                        :disabled="isLoading"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'slug', 'confirmDelete', 'isLoading', 'closeModal'],
};
</script>

<style></style>
