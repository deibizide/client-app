<template>
    <div class="container">
        <h4 class="hmi__header font-weight-bold">Register</h4>
        <div v-if="isLoggedIn" class="text-center mt-4 badge-info p-2">
            <p class="mb-0">
                You are registered!
            </p>
            <div v-if="redirect" class="position-relative mt-2">
                <p class="mb-1">You will be redirected in a couple of seconds...</p>
                <icon icon="spinner" class="fa-spin" />
            </div>
        </div>
        <div v-else class="row d-flex justify-content-center">
            <div class="col-12 col-md-6 p-5">
                <div v-if="isError" class="badge-danger p-2 rounded text-center">
                    {{ isError }}
                </div>
                <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="submit">
                    <form>
                        <div class="form-group">
                            <Input name="email" label="Email" rules="email|required" type="text" v-model="email" />
                        </div>
                        <div class="form-group">
                            <Input name="name" label="Name" rules="required" type="text" v-model="name" />
                        </div>
                        <div class="form-group">
                            <Input
                                name="password"
                                label="Password"
                                rules="min:8|required"
                                type="password"
                                v-model="password"
                            />
                        </div>
                        <div class="form-group">
                            <Input
                                name="confirm-password"
                                label="Confirm Password"
                                :rules="`is:${password}|required`"
                                type="password"
                                v-model="passwordConfirm"
                            />
                        </div>
                        <button
                            class="btn btn-block btn-primary position-relative"
                            type="button"
                            @click="submit"
                            :disabled="isLoading"
                        >
                            <Icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" />
                            <span>Register</span>
                        </button>
                    </form>
                </ValidationObserver>
                <div>
                    <p class="small mt-2 text-center">
                        Already have an account?
                        <router-link :to="{ name: 'login' }">Login here</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// validation
import { ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'The field is required',
});

export default {
    components: {
        ValidationObserver,
    },

    data() {
        return {
            email: null,
            name: null,
            password: null,
            passwordConfirm: null,

            isLoading: false,
            isError: null,
            redirect: false,
        };
    },
    computed: {
        ...mapGetters('SESSION', ['isLoggedIn']),
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.registerUser();
            }
        },

        async registerUser() {
            this.isError = null;
            this.isLoading = true;

            try {
                await this.$store.dispatch('SESSION/REGISTER', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                this.isLoading = false;
                this.isError = error;
            }
        },
    },

    watch: {
        isLoggedIn: function(value) {
            this.isLoading = false;
            this.redirect = true;

            if (value) {
                setTimeout(() => {
                    // TODO: redirect according to role!
                    this.$router.push({
                        name: 'admin',
                    });
                }, 2000);
            }
        },
    },
};
</script>

<style></style>
