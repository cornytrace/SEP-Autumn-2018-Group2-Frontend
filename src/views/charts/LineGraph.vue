<script>
import { Line } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

// Example code
// [
//           {
//             label: "Grade distribution",
//             backgroundColor: hexToRgba("#00D8FF", 90),
//             data: this.data,
//           },
//         ],

export default {
  name: "LineGraph",
  components: {
    hexToRgba,
    CustomTooltips,
  },
  extends: Line,

  props: {
    data: {
      type: Array,
      default: new Array(),
    },
    aspectRatio: {
      type: Boolean,
      default: true,
    },
    labels: {
      type: Array,
      default: new Array(),
    },
    beginAtZero: {
      type: Boolean,
      default: false,
    },
    hasLegend: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
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
          maintainAspectRatio: this.aspectRatio,
          responsive: true,
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
