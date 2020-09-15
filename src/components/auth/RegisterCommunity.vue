<template>
    <div class="container">
        <h4 class="hmi__header hmi__header__auth font-weight-bold">Register</h4>
        <div v-if="isLoggedIn" class="text-center mt-4 badge-info p-2">
            <p class="mb-0">
                You are registered!
            </p>
            <div v-if="redirect" class="position-relative mt-2">
                <p class="mb-1">You will be redirected in a couple of seconds...</p>
                <icon icon="spinner" class="fa-spin" />
            </div>
        </div>
        <div v-else class="row d-flex justify-content-center mb-4">
            <div class="col-12 col-md-7">
                <div v-if="isError" class="badge-danger p-2 rounded text-center">
                    {{ isError }}
                </div>
                <ValidationObserver ref="observer" v-slot="{ invalid }" @submit.prevent="submit">
                    <form>
                        <div class="form-group">
                            <Input
                                label="First Name"
                                name="firstName"
                                rules="required"
                                type="text"
                                v-model="firstName"
                            />
                        </div>
                        <div class="form-group">
                            <Input label="Last Name" name="lastName" rules="required" type="text" v-model="lastName" />
                        </div>

                        <div class="form-group">
                            <Input label="Email" name="email" rules="email|required" type="text" v-model="email" />
                        </div>
                        <div class="form-group">
                            <Input
                                label="Password"
                                name="Password"
                                rules="min:8|required"
                                type="password"
                                v-model="password"
                                autocomplete="current-password"
                            />
                        </div>
                        <div class="form-group">
                            <Input
                                label="Confirm Password"
                                name="confirm-password"
                                :rules="`is:${password}|required`"
                                type="password"
                                v-model="passwordConfirm"
                            />
                        </div>
                        <button class="btn btn-block btn-primary position-relative" type="submit" :disabled="isLoading">
                            <icon v-if="isLoading" icon="spinner" class="button__spinner fa-spin" />
                            <span>Register</span>
                        </button>
                    </form>
                </ValidationObserver>
            </div>
            <div class="col-11">
                <p class="small mt-2 text-center">
                    Already have an account?
                    <router-link :to="{ name: 'login' }">Login here</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
            isLoading: false,
            isError: null,
            redirect: false,

            firstName: null,
            lastName: null,
            email: null,
            password: null,
            passwordConfirm: null,
            agreeToTerms: null,
        };
    },
    computed: {
        ...mapGetters('SESSION', ['isLoggedIn']),
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.registerCommunit();
            }
        },

        async registerCommunit() {
            this.isError = null;
            this.isLoading = true;

            try {
                await this.$store.dispatch('SESSION/REGISTER', {
                    firstName: this.firstName,
                    lastName: this.lastName,
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

<style>
li {
    list-style: none;
}
</style>
