<script>
import { Line } from 'vue-chartjs';
export default {
    extends: Line,
    props: {
        chartData: {
            type: Array,
            default: null,
        },
        chartLabels: {
            type: Array,
            default: null,
        },
    },
    methods: {
        buildChart() {
            this.renderChart(
                {
                    labels: this.chartLabels,
                    datasets: [
                        {
                            label: 'Donations in USD',
                            data: this.chartData,
                            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                            borderColor: ['rgba(54, 162, 235, 1)'],
                            borderWidth: 1,
                        },
                    ],
                },
                {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    fontFamily: '"Montserrat", sans-serif',
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                ticks: {
                                    fontFamily: '"Montserrat", sans-serif',
                                },
                            },
                        ],
                    },
                    maintainAspectRatio: false,
                }
            );
        },
    },
    mounted() {
        this.buildChart();
    },
    watch: {
        chartLabels: {
            handler: 'buildChart',
        },
        chartData: {
            handler: 'buildChart',
        },
    },
};
</script>
