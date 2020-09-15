<template>
    <div class="hmi__numbers hmi__transparent__container" id="numbers">
        <div class="container">
            <div class="row d-flex justify-content-between pt-5">
                <div class="col-12 col-md-3 text-center mt-3 mb-5 pt-5 pt-sm-0">
                    <h4 id="firstNumber" v-scroll="handleScroll">{{ animateNumbersFirst }}</h4>
                    <p>people living with Alzheimer’s Disease</p>
                </div>
                <div class="col-12 col-md-3 text-center mt-3 mb-5">
                    <h4 id="secondNumber" v-scroll="handleScroll">{{ animateNumbersSecond }}%</h4>
                    <p>of these cases are preventable</p>
                </div>
                <div class="col-12 col-md-3 text-center mt-3 mb-5 pb-5 pb-sm-0">
                    <h4><Icon icon="users" /></h4>
                    <p>And the younger we begin, the better.</p>
                </div>

                <router-link :to="{ name: 'donate' }" class="hmi__donate-button btn btn-primary pt-3"
                    >DONATE</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animateNumbersFirst: 0,
            animateNumbersSecond: 0,
        };
    },
    methods: {
        // counter animation
        invFirstNumber() {
            const intervalize = setInterval(() => {
                if (this.animateNumbersFirst < 47000000) {
                    this.animateNumbersFirst = this.animateNumbersFirst + 100000;
                } else {
                    clearInterval(intervalize);
                }
            }, 300);
        },
        // counter animation
        invSecondNumber() {
            const intervalize = setInterval(() => {
                if (this.animateNumbersSecond < 90) {
                    ++this.animateNumbersSecond;
                } else {
                    clearInterval(intervalize);
                }
            }, 100);
        },
        // scroll observer
        handleScroll() {
            if (window.scrollY > 570) {
                this.invFirstNumber();
                this.invSecondNumber();
            }
            return window.scrollY > 570;
        },
    },
    directives: {
        scroll(el, binding) {
            let onScrolling = e => {
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
.hmi__numbers {
    position: relative;
}

.hmi__donate-button {
    position: absolute;
    top: -35px;
    right: 5rem;
    width: 250px;
    height: 70px;
    text-align: center;
    font-size: 2rem;
    &.btn.btn-primary {
        color: $white;
        font-size: 2rem;
    }
}
</style>
