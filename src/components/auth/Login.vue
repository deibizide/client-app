<template>
    <div class="container">
        <h4 class="hmi__header hmi__header__auth font-weight-bold">Login</h4>
        <div v-if="isLoggedIn" class="text-center mt-4 badge-info p-2">
            <p class="mb-0">
                You are logged in!
            </p>
            <div v-if="redirect" class="position-relative mt-2">
                <p class="mb-1">You will be redirected in a couple of seconds...</p>
                <icon icon="spinner" class="fa-spin" />
            </div>
        </div>
        <div v-else class="row d-flex justify-content-center">
            <div class="col-12 col-md-6 p-5">
                <div v-if="isError" class="badge-danger p-2 rounded text-center mb-2">
                    {{ isError }}
                </div>
                <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="submit">
                    <form>
                        <div>
                            <div class="form-group">
                                <Input name="email" label="Email" rules="email|required" type="text" v-model="email" />
                            </div>
                            <div class="form-group">
                                <Input
                                    name="password"
                                    label="Password"
                                    rules="min:8|required"
                                    type="password"
                                    v-model="password"
                                    autocomplete="password"
                                />
                            </div>
                            <button
                                class="btn btn-block btn-primary position-relative"
                                type="button"
                                @click="submit"
                                :disabled="isLoading"
                            >
                                <Icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" />
                                <span>Login</span>
                            </button>
                            <p class="mt-2 small text-center">
                                Don't have an account?
                                <router-link :to="{ name: 'register' }">Register here</router-link>
                            </p>
                        </div>
                    </form>
                </ValidationObserver>
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
            password: null,
            // flags
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
                this.loginUser();
            }
        },

        async loginUser() {
            this.isLoading = true;
            this.isError = null;

            try {
                await this.$store.dispatch('SESSION/LOGIN', {
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
