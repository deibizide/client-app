<template>
    <div class="mb-4">
        <h4 class="text-dark py-4 text-center">
            How does my donation help fight against diseases and disorders of the brain?
        </h4>
        <div class="row d-flex justify-content-between">
            <ChartReportQuarter class="col-12 col-md-10 col-lg-7 order-2 order-lg-1" />

            <div
                class="col-12 col-md-10 col-lg-5 order-1 order-lg-2 pt-lg-5 container d-flex flex-column justify-content-between"
            >
                <div>
                    <p v-for="(string, index) in explanationContent" :key="index">
                        <Icon class="mr-3 mt-4" icon="caret-right" />{{ string }}
                    </p>
                </div>

                <router-link class="btn btn-outline-primary mt-3 mb-4 mb-lg-0" :to="{ name: 'donate-chart-report' }">
                    Learn more
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ChartReportQuarter from '@components/donate/chart/ChartReportQuarter';

export default {
    components: {
        ChartReportQuarter,
    },

    data() {
        return {
            explanationContent: [
                'Donations to Healthy Minds Initiative enable us to:',
                'Collect and analyze data',
                'Initiate and sustain research initiatives',
                'Expand outreach and education projects',
                'Develop new protocols and interventions',
                'Share results and case studies across our network',
                'Leverage technology to automate tasks, scale the organization, and keep overhead costs low',
            ],
        };
    },
};
</script>
