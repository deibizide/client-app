<template>
    <div class="pb-3">
        <label v-if="!withoutLabel" :for="name">{{ label }}</label>
        <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
            <input
                :type="type"
                :name="name"
                :id="name"
                class="form-control"
                :value="value"
                :placeholder="placeholder"
                :autocomplete="label"
                @input="updateValue"
                @change="updateValue"
                :disabled="disabled"
            />
            <span class="text-danger position-absolute">{{ errors[0] }}</span>
        </ValidationProvider>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, min, max, is } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});
extend('email', {
    ...email,
    message: 'The field must be a valid email',
});
extend('min', {
    ...min,
    message: 'The field must be at least 8 characters',
});
extend('max', {
    ...max,
    message: 'The field must be max 70 characters',
});
extend('is', {
    ...is,
    message: "The password doesn't match",
});

export default {
    props: ['label', 'name', 'type', 'value', 'rules', 'placeholder', 'withoutLabel', 'disabled'],

    components: {
        ValidationProvider,
    },

    methods: {
        updateValue(e) {
            this.$emit('input', e.target.value);
        },
    },
};
</script>
