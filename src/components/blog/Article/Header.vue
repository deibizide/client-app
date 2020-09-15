<template>
    <div class="blogpost__image__main">
        <h3 class="blogpost__image__title rounded display-4">{{ title }}</h3>
        <div class="blogpost__image__overlay" :style="blogImg"></div>
        <div class="blogpost__image__overlay"></div>
    </div>
</template>

<script>
export default {
    props: ['title', 'imgUrl'],

    computed: {
        blogImg() {
            return { 'background-image': `url('${this.imgUrl}')` };
        },
    },
};
</script>

<style lang="scss" scoped>
@import './../../../style/_variables';
.blogpost__image__main {
    height: 500px;
}

.blogpost__image__container {
    position: absolute;
    left: 0;
    width: 100%;
    height: 450px;

    // BACKGROUND RELATED
    background-attachment: fixed;
    background-size: cover;
}

.blogpost__image__overlay {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 450px;
    position: absolute;
}

.blogpost__image__title {
    background-color: $primary;
    color: $white;
    position: absolute;
    top: 230px;
    margin-left: 5%;
    z-index: 3;
    padding: 0.5rem 1rem;
    max-width: 90%;
    word-break: break-word;
}

.blogpost__content {
    line-height: 2.2;
}

.blogpost__header {
    padding-top: 2rem;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        width: 110%;
        height: 1px;
        bottom: -0.5rem;
        left: 0;
        border-bottom: 0.4rem solid $info;
    }
}

.image-container .blogpost__header {
    position: absolute;
    top: 50px;
    left: 80px;
    color: $white;
    display: block;
    background: rgba(0, 0, 0, 0.6);
}

#blogpostCardImg {
    object-fit: cover;
    height: 450px;
}

.divider {
    border-left: 4px solid $dark;
}
</style>
