<template>
    <nav
        class="navbar navbar-expand-md fixed-top shadow-sm navbar-light p-0"
        :class="{ navbar__top: isCommunityNavbar }"
    >
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
                        v-for="(item, index) in navContent"
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
                    <router-link
                        :to="{ name: 'donate' }"
                        tag="a"
                        class="btn btn-primary ml-0 ml-md-3 ml-lg-5 my-4 my-md-0"
                    >
                        DONATE NOW
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['isCommunityNavbar'],

    data() {
        return {
            navContent: [
                { page: 'Home', link: 'home' },
                { page: 'Blog', link: 'blog' },
                { page: 'Communities', link: 'communities' },
                { page: 'Brain Facts', link: 'brainFacts' },
                { page: 'Research', link: 'research' },
                { page: 'About', link: 'about' },
            ],
        };
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
nav.navbar.navbar__top {
    top: 30px;
}
</style>
