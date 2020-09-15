<script>
// api urls
const BASE_URL = process.env.VUE_APP_BASE_URL;
const STATS_URL = `${BASE_URL}/stats/monthly-donations`;
export default {
    name: 'ChartMixin',
    data() {
        return {
            isLoading: false,
            chartData: [],
            chartLabels: [],
            quarters: [
                {
                    title: 'TOTAL',
                    value: 0,
                },
                {
                    title: 'Q1',
                    value: 1,
                },
                {
                    title: 'Q2',
                    value: 2,
                },
                {
                    title: 'Q3',
                    value: 3,
                },
                {
                    title: 'Q4',
                    value: 4,
                },
            ],
        };
    },
    methods: {
        async fetchChartData() {
            let apiData;
            this.chartData = [];
            this.isLoading = true;
            const { apiUrl, chartLabels } = this.getUrlParams();
            try {
                apiData = await this.$axios.get(`${apiUrl}`);
            } catch (error) {
                this.isLoading = false;
            }
            this.chartLabels = chartLabels;
            apiData.data.forEach(data => {
                this.chartData.push(data.total / 100);
            });
            this.isLoading = false;
        },
        getLabels() {
            let from;
            let to;
            let chartLabels = [];
            switch (this.selectedQuarter) {
                case 0:
                    from = '01';
                    to = '12';
                    chartLabels = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ];
                    break;
                case 1:
                    from = '01';
                    to = '03';
                    chartLabels = ['January', 'February', 'March'];
                    break;
                case 2:
                    from = '04';
                    to = '06';
                    chartLabels = ['April', 'May', 'June'];
                    break;
                case 3:
                    from = '07';
                    to = '09';
                    chartLabels = ['July', 'August', 'September'];
                    break;
                case 4:
                    from = '10';
                    to = '12';
                    chartLabels = ['October', 'November', 'December'];
                    break;
                default:
                    from = '01';
                    to = '12';
                    break;
            }
            return { from, to, chartLabels };
        },
        getYears() {
            const currentYear = new Date().getFullYear();
            const startYear = 2019;
            for (let i = startYear; i <= currentYear; i++) {
                this.years.push(i);
            }
        },
        getUrlParams() {
            const { from, to, chartLabels } = this.getLabels();
            const urlParams = {
                from: `${this.selectedYear}-${from}`,
                to: `${this.selectedYear}-${to}`,
                community: this.selectedCommunity || undefined,
                project: this.selectedProject || undefined,
            };
            let apiUrl = `${STATS_URL}?from=${urlParams.from}&to=${urlParams.to}`;
            if (urlParams.community) {
                apiUrl = `${apiUrl}&community=${urlParams.community}`;
            }
            if (urlParams.project) {
                apiUrl = `${apiUrl}&project=${urlParams.project}`;
            }
            return { apiUrl, chartLabels };
        },
    },
};
</script>
