<template>
    <div class="container border rounded pb-4">
        <h5 class="hmi__header">Our Community</h5>

        <!-- CAROUSEL -->
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner mt-2">
                <div
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                    v-for="(image, index) in images"
                    :key="index"
                >
                    <!-- TODO: images need to be 500px height, then they layout is ok -->
                    <img class="img-fluid rounded" :src="image.src" :alt="`Slider image #${index}`" />
                    <div class="text-center btn-info py-1 ">
                        <h5>{{ image.title }}</h5>
                        <p>{{ image.description }}</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['images'],
};
</script>

<style lang="scss" scoped>
span {
    left: 10px;
}
</style>
