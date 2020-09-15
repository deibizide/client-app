<template>
    <button
        class="col-8 col-sm-5 col-md-3 col-lg-2 col-xl-1 p-4 mr-1 mr-sm-3 mr-lg-5 mb-1 mb-md-3 btn btn-lg btn-outline-primary"
        type="submit"
        :value="value"
        :disabled="disabled"
        @click="eventHandler"
    >
        ${{ value }}
    </button>
</template>

<script>
export default {
    props: ['value', 'eventHandler', 'disabled'],
};
</script>

<style></style>
