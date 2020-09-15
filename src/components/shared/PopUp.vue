<template>
    <div
        class="modal fade show"
        id="marketingPopup"
        ref="marketingPopup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content d-flex justify-content-center modal__background">
                <div class="modal__overlay rounded"></div>
                <button type="button" class="btn">
                    <span
                        aria-hidden="true"
                        class="close d-flex justify-content-end p-4"
                        data-dismiss="modal"
                        aria-label="Close"
                        >&times;</span
                    >
                </button>
                <h3 class="text-center pt-3 modal__index font-weight-bold">The Best Foods for Brain Health</h3>

                <div class="modal-body">
                    <h5 class="text-center mb-4 px-2" id="modal-body-shopping-list">
                        Sign up for our news letter and get a handy printable shopping list of the best foods for brain
                        health. Neurologist approved and evidence based!
                    </h5>

                    <div v-if="isSuccess" class="text-center">
                        <Icon icon="check-circle" class="fa-3x text-primary my-4" />
                        <h5>Thank you for signing up.</h5>
                        <h5>Check your inbox!</h5>
                    </div>
                    <div v-else>
                        <div v-if="isLoading" class="d-flex justify-content-center mt-4">
                            <Icon icon="spinner" class="fa-spin fa-2x text-primary" />
                        </div>
                        <form
                            @submit.prevent="onSubmit"
                            id="_form_3_"
                            class="_form _form_3 _inline-form _dark modal__form"
                        >
                            <div class="font-weight-bold">
                                <div class="form-group ">
                                    <label for="email" class="_form-label">Your Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        class="form-control"
                                        v-model="email"
                                        required
                                        :disabled="isLoading"
                                    />
                                </div>

                                <button class="btn btn-lg btn-block btn-primary" type="submit" :disabled="isLoading">
                                    Get your free shopping list
                                </button>
                            </div>
                        </form>
                        <button
                            class="btn btn-sm text-black font-weight-bold"
                            id="modal-close-shopping-list"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="onSubmit"
                        >
                            No thanks, I don't need a free shopping list or monthly tips, tricks and brain health
                            resources
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',

            isLoading: false,
            isSuccess: false,
        };
    },
    methods: {
        onSubmit() {
            if (this.isLoading) return;

            this.isLoading = true;

            setTimeout(() => {
                this.isLoading = false;
                this.isSuccess = true;
            }, 2000);
            localStorage.setItem('shopping-list', true);
        },
    },
};
</script>

<style lang="scss">
.modal__background {
    background-image: url('/client-app/images/popup__image.jpg');
    background-position: center;
    background-size: cover;
    height: 500px;
}
.modal__overlay {
    background-color: rgba(255, 255, 255, 0.6);
    height: 500px;
    position: absolute;
    width: 100%;
}
.modal__index {
    z-index: 3;
}
.modal__form {
    margin-top: 7rem;
}
.popup__image {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
</style>
