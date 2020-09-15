<template>
    <div class="editButton d-flex justify-content-end w-100">
        <button
            class="btn btn-primary editPage__button"
            type="button"
            data-toggle="modal"
            :data-target="`#${modalName}`"
        >
            <Icon icon="edit" class="edit-button" />
            <span>Edit</span>
        </button>
        <div
            class="modal fade"
            :id="modalName"
            tabindex="-1"
            role="dialog"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['handleUpdate', 'modalName'],
};
</script>

<style lang="scss" scoped>
.editPage__button {
    min-width: auto;
}
</style>
