<template>
    <div class="hmi__light__container">
        <div class="container pb-5 pt-5">
            <div class="title mb-5">
                <h4 class="hmi__header font-weight-bold">We accomplish our mission with</h4>
            </div>
            <div class="row d-flex justify-content-sm-between justify-content-around mt-3 mb-5 mx-0" id="mission">
                <div
                    class="col-11 col-md-12 col-lg-3 card border-primary mb-5 hmi__mission__card first"
                    v-scroll="handleScroll"
                >
                    <div class="card__icon rounded-circle text-center">
                        <Icon icon="search" class="fa-search mt-2 fa-2x" />
                    </div>
                    <div class="card-body mb-4">
                        <h5 class="card-title mb-4 mt-4">
                            Research
                        </h5>
                        <p class="card-text">
                            Through our research and extensive collective medical backgrounds, we work to demystify the
                            steps to achieving long-term brain health and the prevention of devastating diseases such as
                            Alzheimer’s and dementia.
                        </p>
                    </div>
                </div>

                <div
                    class="col-11 col-md-12 col-lg-3 card border-primary mb-5 hmi__mission__card second"
                    v-scroll="handleScroll"
                >
                    <div class="card__icon rounded-circle text-center">
                        <Icon icon="user-graduate" class="fa-graduation-cap mt-2 fa-2x" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-4 mt-4">Education</h5>
                        <p class="card-text">
                            Most people don’t understand brain health is in their hands. We host local workshops in
                            community centers, churches — places where members of the community are known to congregate
                            — to arm people with knowledge to improve brain health.
                        </p>
                    </div>
                </div>

                <div
                    class="col-11 col-md-12 col-lg-3 card border-primary mb-5 hmi__mission__card third"
                    v-scroll="handleScroll"
                >
                    <div class="card__icon rounded-circle text-center">
                        <Icon icon="user-friends" class="fa-users mt-2 fa-2x" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-4 mt-4">Mobilization</h5>
                        <p class="card-text">
                            We involve local community leaders across all industries – government, civic, business,
                            faith – and equip them with the best strategies to approach brain health education and
                            implementation for their communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleScroll(e, el) {
            if (window.scrollY > 50) {
                if (el.classList.contains('first')) {
                    el.classList.add('hmi__animation__fade-in');
                    el.classList.add('hmi__animation__fade-in__first');
                }
                if (el.classList.contains('second')) {
                    el.classList.add('hmi__animation__fade-in');
                    el.classList.add('hmi__animation__fade-in__second');
                }
                if (el.classList.contains('third')) {
                    el.classList.add('hmi__animation__fade-in');
                    el.classList.add('hmi__animation__fade-in__third');
                }
            }
            return window.scrollY > 100;
        },
    },
    directives: {
        scroll(el, binding) {
            let onScrolling = function(e) {
                if (binding.value(e, el)) {
                    window.removeEventListener('scroll', onScrolling);
                }
            };
            window.addEventListener('scroll', onScrolling);
        },
    },
};
</script>

<style scoped lang="scss">
@import './../../style/_variables';
.hmi__mission__card {
    opacity: 0;
}
.card__icon {
    width: 50px;
    height: 50px;
    background-color: $primary;

    position: absolute;
    top: -24px;
    left: 40%;

    svg {
        position: absolute;
        color: $white;
    }
    // the icons are different so they require custom positioning
    .fa-search {
        font-size: 22px;
        top: 6px;
        left: 14px;
    }

    .fa-graduation-cap {
        font-size: 21px;
        top: 8px;
        left: 16px;
    }

    .fa-users {
        font-size: 20px;
        top: 7px;
        left: 13px;
    }
}

/* FADE IN CARD ANIMATIONS*/
.hmi__animation__fade-in {
    -moz-animation: fadeIn 1s ease-in-out forwards;
    -webkit-animation: fadeIn 1s ease-in-out forwards;
    animation: fadeIn 1s ease-in-out forwards;
}
.hmi__animation__fade-in {
    &__first {
        animation-delay: 100ms;
    }
    &__second {
        animation-delay: 400ms;
    }
    &__third {
        animation-delay: 700ms;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
