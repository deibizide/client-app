<template>
    <div class="hmi__carousel__text__container" id="communities">
        <div class="container">
            <div class="title mb-2">
                <h4 class="hmi__header text-body font-weight-bold">Communities</h4>
            </div>
        </div>
        <div class="carousel slide" id="hmi__carousel__communities" data-ride="carousel">
            <ol class="carousel-indicators">
                <li class="active" data-target="#hmi__carousel__communities" data-slide-to="0"></li>
                <li data-target="#hmi__carousel__communities" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner pb-3">
                <div class="carousel-item active">
                    <div class="rounded d-flex justify-content-center text-center">
                        <div class="py-4 align-self-center">
                            <img
                                src="images/website/desktop/communities_1.jpg"
                                alt="a birds view on a shore on the right side and buildings on the left side"
                                class="img-thumbnail mb-4"
                                width="200"
                            />
                            <h4>HMI of Beach Cities</h4>
                            <h4>
                                <router-link :to="{ name: 'communities', hash: '#beach-cities' }"
                                    >Read about the community</router-link
                                >
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="rounded d-flex justify-content-center text-center">
                        <div class="py-4 align-self-center">
                            <img
                                src="images/website/desktop/communities_2.jpg"
                                alt="landscape with mountains in a red-coloured sunset"
                                class="img-thumbnail mb-4"
                                width="200"
                            />
                            <h4>HMI of Sedona and Northern Arizona</h4>
                            <h4>
                                <router-link :to="{ name: 'communities', hash: '#sedona-and-northern-arizona' }"
                                    >Read about the community</router-link
                                >
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#hmi__carousel__communities" class="carousel-control-prev" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a href="#hmi__carousel__communities" class="carousel-control-next" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.hmi__carousel__text__container {
    background-color: #00828c91;
    color: white;
}
</style>
