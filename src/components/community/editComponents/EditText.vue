<template>
    <div>
        <form v-if="type === 'textarea'">
            <label :for="`edit-${label}`">{{ label }}</label>
            <textarea
                class="form-control textArea"
                :id="`edit-${label}`"
                v-model="updatedValue"
                :maxlength="maxLength"
            ></textarea>
            <small v-if="maxLength" class="ml-1 form-text text-muted"
                >Text must be max {{ maxLength }} characters long</small
            >
        </form>

        <Input
            v-if="type === 'input'"
            :name="name"
            :label="label"
            :rules="rules"
            :type="inputType"
            v-model="updatedValue"
            class="mt-4"
        />
    </div>
</template>
<script>
export default {
    props: [
        'value',
        'updateValue',
        'type', // input or textarea
        'maxLength',
        'withoutLabel',
        'label',
        // for input
        'name',
        'rules',
        'inputType',
    ],
    data() {
        return {
            updatedValue: null,
        };
    },
    watch: {
        // Remove binding from prop to v-modal
        value: {
            handler: function(value) {
                this.updatedValue = value;
            },
            immediate: true,
        },
        updatedValue: {
            handler: function(value) {
                this.updateValue(this.label, value);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.textArea {
    resize: none;
    min-height: 130px;
}
</style>
