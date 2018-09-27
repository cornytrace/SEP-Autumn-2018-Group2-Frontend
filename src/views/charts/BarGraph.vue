<script>
import { Bar } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

// Example data
// [
//           {
//             label: "GitHub Commits",
//             backgroundColor: "#f87979",
//             data: this.data,
//           },
//         ],

export default {
  name: "BarGraph",
  extends: Bar,
  props: {
    data: {
      type: Array,
      default: new Array(),
    },
    labels: {
      type: Array,
      default: new Array(),
    },
    maintainAspectRatio: {
      type: Boolean,
      default: true,
    },
    hasLegend: {
      type: Boolean,
      default: false,
    },
    beginAtZero: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.render();
  },
  watch: {
    labels: function() {
      this.render();
    },
  },
  methods: {
    render() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: this.data,
        },
        {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: this.beginAtZero,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
          },
          legend: {
            display: this.hasLegend,
          },
          responsive: true,
          maintainAspectRatio: this.maintainAspectRatio,
          tooltips: {
            enabled: false,
            custom: CustomTooltips,
            intersect: true,
            mode: "index",
            position: "nearest",
            callbacks: {
              labelColor: function(tooltipItem, chart) {
                return {
                  backgroundColor:
                    chart.data.datasets[tooltipItem.datasetIndex]
                      .backgroundColor,
                };
              },
            },
          },
        }
      );
    },
  },
};
</script>
