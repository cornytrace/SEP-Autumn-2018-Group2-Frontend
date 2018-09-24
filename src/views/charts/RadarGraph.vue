<script>
import { Radar } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

// Example data
// [
//           {
//             label: "2017",
//             backgroundColor: "rgba(179,181,198,0.2)",
//             borderColor: "rgba(179,181,198,1)",
//             pointBackgroundColor: "rgba(179,181,198,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(179,181,198,1)",
//             data: [65, 59, 90, 81, 56, 55, 40,],
//           },
//           {
//             label: "2018",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             pointBackgroundColor: "rgba(255,99,132,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(255,99,132,1)",
//             data: [28, 48, 40, 19, 96, 27, 100,],
//           },
//         ],

export default {
  name: "RadarGraph",
  extends: Radar,
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
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.data,
      },
      {
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
                  chart.data.datasets[tooltipItem.datasetIndex].borderColor,
              };
            },
          },
        },
      }
    );
  },
};
</script>
