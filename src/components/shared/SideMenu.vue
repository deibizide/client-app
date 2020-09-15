<template>
    <div class="sidemenu__button">
        <button
            class="btn btn-lg btn-primary mb-1"
            :class="{ 'icon__slide-to-right': isMenuVisible }"
            @click="toggleMenuVisibility"
            ref="dropdownMenu"
        >
            <Icon icon="user" class="ml-5" />
            <Icon
                class="ml-3"
                icon="caret-right"
                :class="{ icon__rotate: isMenuVisible, icon__back_rotate: !isMenuVisible }"
            />
        </button>
        <div v-if="isMenuVisible">
            <div
                v-if="isLoggedIn && accountRoles.includes('admin')"
                class="container sidemenu card card-body text-center"
                :class="{ sidemenu__hidden: !isMenuVisible }"
            >
                <router-link :to="{ name: 'admin' }" class="small py-2 border-bottom">
                    Admin
                </router-link>
                <router-link :to="{ name: 'admin-blog' }" class="small py-2">
                    Blog Menu
                </router-link>
            </div>
            <div
                v-else-if="isLoggedIn && accountRoles.includes('communityOwner')"
                class="container sidemenu card card-body text-center"
                :class="{ sidemenu__hidden: !isMenuVisible }"
            >
                <router-link :to="{ name: 'admin' }" class="small py-2">
                    Manage community
                </router-link>
            </div>
            <div
                v-else-if="isLoggedIn && accountRoles.includes('user')"
                class="container sidemenu card card-body text-center"
                :class="{ sidemenu__hidden: !isMenuVisible }"
            >
                <router-link :to="{ name: 'login-welcome' }" class="small py-2 border-bottom">
                    Profile
                </router-link>
                <router-link :to="{ name: 'logout' }" class="small py-2">
                    Log Out
                </router-link>
            </div>
            <div
                v-else
                class="container sidemenu card card-body text-center"
                :class="{ sidemenu__hidden: !isMenuVisible }"
            >
                <router-link :to="{ name: 'login' }" class="small py-2 border-bottom">
                    Log In
                </router-link>
                <router-link :to="{ name: 'register' }" class="small py-2">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            isMenuVisible: false,
        };
    },

    computed: {
        ...mapGetters('SESSION', ['isLoggedIn', 'accountRoles']),
    },

    methods: {
        toggleMenuVisibility() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        documentClick(e) {
            if (!this.$refs.dropdownMenu.contains(e.target)) {
                this.isMenuVisible = false;
            }
        },
    },
    created() {
        document.addEventListener('click', this.documentClick);
    },
    destroyed() {
        document.removeEventListener('click', this.documentClick);
    },
};
</script>

<style lang="scss" scoped>
.sidemenu__button {
    position: fixed;
    top: 100px;
    left: -80px;
    z-index: 2000;
}
.sidemenu {
    position: fixed;
    left: 5px;
    width: 10rem;
}

.icon__slide-to-right {
    position: relative;
    right: -30px;
}

.icon__back_rotate {
    transform: rotate(0deg);
    transition: all 0.3s;
}

.icon__rotate {
    transform: rotate(90deg);
    transition: all 0.3s;
    right: 10px;
}
</style>
