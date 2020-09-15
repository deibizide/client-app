<template>
    <nav class="navbar navbar-expand-md fixed-top shadow-sm navbar-light p-0">
        <div class="container">
            <router-link :to="{ name: 'home' }" tag="a" class="ml-4 navbar-brand">
                <img src="images/HMI_logo_compressed.jpg" alt="healthy minds initiative logo" aria-hidden="true" />
            </router-link>

            <button
                class="mr-4 border-0 navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <Icon icon="bars" />
            </button>

            <div class="collapse navbar-collapse pb-3 pb-md-0" id="navbarNav">
                <ul class="navbar-nav align-items-center ml-auto" role="navigation">
                    <li
                        class="nav-item px-0 px-lg-2 text-truncate text-capitalize"
                        v-for="(item, index) in navContent[currentRole]"
                        :key="index"
                    >
                        <router-link
                            :to="{ name: item.link }"
                            tag="a"
                            class="nav-link"
                            :class="{ 'text-primary font-weight-bold': $route.name === item.link }"
                        >
                            {{ item.page }}
                        </router-link>
                    </li>
                    <li class="nav-item px-0 px-lg-2 text-truncate text-capitalize">
                        <router-link :to="{ name: 'logout' }" class="nav-link">
                            Log Out
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isMenuVisible: false,
            navContent: {
                admin: [
                    { page: 'Home', link: 'home' },
                    { page: 'Dashboard', link: 'admin' },
                    { page: 'Manage Blog', link: 'admin-blog' },
                ],
                communityOwner: [
                    { page: 'Home', link: 'home' },
                    { page: 'Edit Community', link: 'community-dashboard' },
                ],
                user: [],
            },
        };
    },

    computed: {
        ...mapGetters('SESSION', ['accountRoles']),

        currentRole() {
            if (this.accountRoles.includes('admin')) {
                return 'admin';
            }
            if (this.accountRoles.includes('communityOwner')) {
                return 'communityOwner';
            }

            return 'user';
        },
    },
};
</script>

<style scoped lang="scss">
nav.navbar {
    background-color: #fff;

    .navbar-brand {
        img {
            width: 60px;
            height: auto;
        }
    }
}

.nav__menu {
    position: absolute;
    top: 70px;
    right: 10px;
    // right: 10%; // TODO: check this, it's not really responsive. Need to align to bootstrap's container media query
    width: 200px;
}
</style>
