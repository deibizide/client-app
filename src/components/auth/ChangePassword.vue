<template>
    <div class="page">
        <div class="container">
            <h4 class="hmi__header font-weight-bold">Change password</h4>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-6 p-5">
                    <div class="form-group">
                        <label for="old-password">Old password</label>
                        <input
                            id="old-password"
                            type="old-password"
                            name="old-password"
                            class="form-control"
                            minlength="8"
                            maxLength="25"
                            required
                            v-model="post.password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="new-password">New password</label>
                        <input
                            id="new-password"
                            type="new-password"
                            name="new-password"
                            class="form-control"
                            minlength="8"
                            maxLength="25"
                            required
                            v-model="post.password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="confirm-new-password">Confirm new password</label>
                        <input
                            id="confirm-new-password"
                            type="confirm-new-password"
                            name="confirm-new-password"
                            class="form-control"
                            minlength="8"
                            maxLength="25"
                            required
                            v-model="post.password"
                        />
                    </div>
                    <button class="btn btn-block btn-primary" type="button" @click="submitPasswordUpdate">
                        Update password
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                oldPassword: null,
                newPassword: null,
                confirmNewPassword: null,
            },
        };
    },
    methods: {
        submitPasswordUpdate() {
            // console.log('Submit new password button works!');
        },
    },
};
</script>

<style></style>
