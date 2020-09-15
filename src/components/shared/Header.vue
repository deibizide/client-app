<template>
    <div class="hmi__image__main">
        <h3 class="hmi__image__title rounded display-4 font-weight-bold">{{ (text ? text : '') | capitalize }}</h3>
        <div class="hmi__image__container"></div>
        <div class="hmi__image__overlay"></div>
    </div>
</template>

<script>
export default {
    props: ['text'],
    filters: {
        capitalize: function(text) {
            return text.toUpperCase();
        },
    },
};
</script>
<style scoped lang="scss">
@import './../../style/_variables';
// transparent overlay on main background image on the page
.hmi__image__main {
    height: 370px;
    width: 100%;
}

.hmi__image__container {
    background: url('/client-app/images/main__bg__blurred.jpg') center center no-repeat;
    position: absolute;
    left: 0;
    width: 100%;
    height: 350px;
    background-size: cover;
}

.hmi__image__overlay {
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 350px;
    position: absolute;
}

.hmi__image__title {
    background-color: $primary;
    color: $white;
    position: absolute;
    top: 240px;
    margin-left: 5%;
    z-index: 3;
    padding: 0.5rem 2rem;
}
</style>
