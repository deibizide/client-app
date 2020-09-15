<template>
    <div class="arrow text-center p-3 shadow" id="hmi__scroll-to-top" v-scroll="handleScroll" @click="scrollToTop">
        <Icon class="fa-2x color" icon="arrow-up" />
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            display: 'block',
            show: true,
        };
    },
    methods: {
        handleScroll(e, el) {
            if (window.scrollY > 50) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
            return window.scrollY > 50;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
    directives: {
        scroll(el, binding) {
            let onScrolling = e => {
                if (binding.value(e, el)) {
                    window.addEventListener('scroll', onScrolling);
                }
            };
            window.addEventListener('scroll', onScrolling);
        },
    },
};
</script>

<style lang="scss" scoped>
.color {
    color: white;
}
</style>
