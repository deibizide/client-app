<template>
    <div class="hmi__light__container" id="cause">
        <div class="container pb-5 pt-5">
            <div class="title mb-5">
                <h4 class="hmi__header font-weight-bold">Join our cause</h4>
            </div>
            <div class="row d-flex justify-content-between justify-content-sm-around">
                <div class="col-12 col-sm-7 col-md-4 mb-4 hmi__cause__card first" v-scroll="handleScroll">
                    <router-link :to="{ name: 'donate' }">
                        <img
                            src="images/cause_1.jpg"
                            alt="A stack of coins on one person's hand and another person putting another coin on top of it."
                            class="card-img-top rounded"
                        />
                        <p class="mt-4">Every tax-deductible contribution goes towards growing our mission.</p>
                    </router-link>
                </div>
                <div class="col-12 col-sm-7 col-md-4 mb-4 hmi__cause__card second" v-scroll="handleScroll">
                    <router-link :to="{ name: 'home', hash: '#volunteer' }" exact>
                        <img
                            src="images/cause_2.jpg"
                            alt="Several people gathered around a table with a laptop and a notebook."
                            class="card-img-top rounded"
                        />
                        <p class="mt-4">
                            Interested in organizing an HMI event in your community? Start the conversation.
                        </p>
                    </router-link>
                </div>
                <div class="col-12 col-sm-7 col-md-4 mb-4 hmi__cause__card third" v-scroll="handleScroll">
                    <router-link :to="{ name: 'home', hash: '#subscribe' }" exact>
                        <img
                            src="images/cause_3.jpg"
                            alt="A man and a woman of age are smiling and watching a tablet which the man is holding in his hands, the woman is pointing at it."
                            class="card-img-top rounded"
                        />
                        <p class="mt-4">
                            Subscribe to the HMI email list for monthly news and updates.
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleScroll(e, el) {
            if (window.scrollY > 1600) {
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
            return window.scrollY > 1700;
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
.hmi__cause__card {
    opacity: 0;
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
