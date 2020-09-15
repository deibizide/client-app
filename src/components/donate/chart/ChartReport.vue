<template>
    <div class="my-4">
        <h3 class="d-flex justify-content-center py-4">DONATION REPORT</h3>
        <div class="container my-4">
            <div class="d-flex justify-content-between buttons__container">
                <div class="row pl-3">
                    <button
                        v-for="quarter in quarters"
                        :key="quarter.value"
                        class="btn px-4 py-2"
                        :class="{ 'btn-outline-primary': quarter.value === selectedQuarter }"
                        :value="quarter.value"
                        @click="setSelectedQuarter"
                    >
                        {{ quarter.title }}
                    </button>
                </div>
                <div class="dropdown dropdown-container">
                    <button
                        class="btn dropdown-toggle px-4 py-2"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {{ selectedYear }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <span class="dropdown-item" v-for="year in years" :key="year" @click="setSelectedYear(year)">{{
                            year
                        }}</span>
                    </div>
                </div>
            </div>
            <div class="container community__chart__container p-5 ">
                <LineChart
                    v-if="!isLoading"
                    :chartLabels="chartLabels"
                    :chartData="chartData"
                    class="chart__animation__fade-in"
                />
                <div v-if="isLoading" class="d-flex justify-content-center align-items-center">
                    <icon icon="spinner" class="fa-spin fa-3x chart__spinner text-primary" />
                </div>
            </div>
        </div>
        <div class="container py-3">
            <ChartDataInfo
                :quarter="selectedQuarter === 0 ? 'Total' : quarters[selectedQuarter].title"
                :year="selectedYear"
                :communityName="selectedCommunityName"
                :projectName="selectedProjectName"
            />
            <div class="container py-3">
                <h5 class="my-4 text-center">
                    View fundraising stats for a specific community or project
                </h5>
                <CommunityDonation :setCustomSelection="setCustomSelection" />
            </div>
        </div>
    </div>
</template>

<script>
// mixins
import ChartMixin from '@src/mixins/ChartMixin';
// components
import LineChart from '@components/donate/chart/Chart.vue';
import CommunityDonation from '@components/donate/main/CommunityDonation';
import ChartDataInfo from '@components/donate/chart/ChartDataInfo';

export default {
    name: 'LineChartContainer',

    components: { LineChart, CommunityDonation, ChartDataInfo },

    mixins: [ChartMixin],

    data() {
        return {
            years: [],
            selectedQuarter: 0,
            selectedYear: new Date().getFullYear(),
            selectedProject: null,
            selectedCommunity: null,
            selectedProjectName: null,
            selectedCommunityName: null,
        };
    },
    methods: {
        setCustomSelection(type, name, slug) {
            if (type === 'community') {
                this.selectedCommunity = slug;
                this.selectedCommunityName = name;
            }
            if (type === 'project') {
                this.selectedProject = slug;
                this.selectedProjectName = name;
            }
        },
        setSelectedQuarter(e) {
            const quarterValue = e.target.value;
            this.selectedQuarter = Number(quarterValue);
        },
        setSelectedYear(value) {
            this.selectedYear = value;
        },
    },
    mounted() {
        this.getYears();
        this.fetchChartData();
    },
    watch: {
        selectedYear: {
            handler: 'fetchChartData',
        },
        selectedQuarter: {
            handler: 'fetchChartData',
        },
        selectedCommunity: {
            handler: 'fetchChartData',
        },
        selectedProject: {
            handler: 'fetchChartData',
        },
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
.buttons__container {
    border: 1px solid $info;
    border-bottom: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
}
.results__container {
    max-width: 550px;
    background-color: $info;
}
.chart__spinner {
    z-index: 120;
}
</style>
