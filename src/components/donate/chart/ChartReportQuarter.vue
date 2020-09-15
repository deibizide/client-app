<template>
    <div class="container">
        <h4 class="text-dark py-3 text-center">{{ selectedYear }} Q{{ selectedQuarter }} fundraising</h4>
        <div class="container community__chart__container p-5 text-center">
            <LineChart
                v-if="!isLoading"
                :chartLabels="chartLabels"
                :chartData="chartData"
                class="chart__animation__fade-in"
            />
            <div v-if="isLoading" class="d-flex justify-content-center align-items-center">
                <icon icon="spinner" class="fa-spin fa-3x chart__spinner text-primary mt-5" />
            </div>
        </div>
    </div>
</template>

<script>
// mixins
import ChartMixin from '@src/mixins/ChartMixin';
// components
import LineChart from './Chart.vue';

export default {
    name: 'ChartQuarterReport',

    components: { LineChart },
    mixins: [ChartMixin],

    computed: {
        selectedYear() {
            return new Date().getFullYear();
        },
        selectedQuarter() {
            const today = new Date();
            const quarter = Math.floor((today.getMonth() + 3) / 3);

            return quarter;
        },
    },
    mounted() {
        this.fetchChartData();
    },
};
</script>

<style lang="scss" scoped>
@import './src/style/_variables';
.chart__animation__fade-in {
    -moz-animation: fadeIn 0.5s ease-in-out forwards;
    -webkit-animation: fadeIn 0.5s ease-in-out forwards;
    animation: fadeIn 0.5s ease-in-out forwards;
}
.community__chart__container {
    height: 500px;
    border: 1px solid $info;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
</style>
