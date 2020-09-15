<template>
    <div class="container border rounded my-4">
        <div class="d-flex">
            <h5 class="hmi__header w-100">Stay Updated</h5>
        </div>

        <div class="row d-flex justify-content-center">
            <p class="col-12 text-justify mt-4">
                {{ info }}
            </p>
            <form class="col-11 col-md-9 my-4">
                <Input name="email" label="Email" rules="email|required" type="text" v-model="userEmail" />
                <button class="btn btn-outline-primary btn-block" @click="subscribe">
                    Join the {{ name }} Mailing List
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'info', 'email'],

    data() {
        return {
            userEmail: null,
        };
    },

    methods: {
        subscribe() {
            // console.log(this.userEmail);
        },
    },
};
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
}
.form__icon {
    position: absolute;
    right: 0px;
    color: #ced4da;
}
.button__edit {
    padding: 6px 9px;
}
</style>
