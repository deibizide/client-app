<template>
    <div class="community__header container mt-5 pt-3 border rounded">
        <div class="community__profile-cover-image">
            <img
                v-show="image"
                class="img-fluid rounded"
                alt="Community picture"
                :src="image"
                style="height: 100%; width: 100%;"
            />
        </div>
        <div class="image-container d-flex justify-content-end pr-5 position-relative ">
            <div class="header__logo">
                <img v-show="logo" alt="Logo" :src="logo" class="border border-primary" />
            </div>
        </div>
        <div class="row community__header__description mb-4">
            <div class="community__header__sub-container col-12">
                <h4 class="hmi__header font-weight-bold">{{ name }}</h4>
                <p class="community__header__text">
                    {{ description }}
                </p>
                <p v-if="email">
                    Contact: <a :href="`mailto:${email}`">{{ email }}</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'description', 'image', 'logo', 'email'],
};
</script>

<style lang="scss" scoped>
.hmi__header {
    padding-top: 0rem;
}
.community___crop-area-container {
    height: 300px;
    background-color: #dddddd;
}
.community__profile-cover-image {
    height: 600px;
    background-color: #dddddd;
}
.community__header__text {
    min-height: 100px;
}
.image-container {
    top: -70px;
    z-index: 1;
}
.header__logo {
    background-color: #666565;
    border-radius: 50%;
    height: 120px;
    width: 120px;
}
.header__logo img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
}
.header___alert {
    height: 85px;
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .image-container {
        top: -55px;
    }
    .header__logo {
        height: 100px;
        width: 100px;
    }
    .header__logo img {
        height: 100px;
        width: 100px;
    }
    .community__profile-cover-image {
        height: 500px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .image-container {
        top: -50px;
    }
    .hmi__header {
        margin-top: 20px;
    }
    .community__profile-cover-image {
        height: 380px;
    }
    .header__logo {
        width: 90px;
        height: 90px;
    }
    .header__logo img {
        height: 90px;
        width: 90px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .community__profile-cover-image {
        height: 270px;
    }
    .image-container {
        left: 20px;
        top: -40px;
    }
    .hmi__header {
        margin-top: 20px;
    }
    .header__logo {
        width: 80px;
        height: 80px;
    }
    .header__logo img {
        height: 80px;
        width: 80px;
    }
}
@media (max-width: 575.98px) {
    .community__header__sub-container {
        padding-top: 40px;
    }
    .image-container {
        top: -30px;
        left: 30px;
    }
    .community__profile-cover-image {
        height: 190px;
    }
    .header__logo {
        width: 65px;
        height: 65px;
    }
    .header__logo img {
        height: 65px;
        width: 65px;
    }
}
</style>
