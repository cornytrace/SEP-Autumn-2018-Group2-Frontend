<script>
import { PolarArea } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

// Example data
// [
//           {
//             label: "My First dataset",
//             backgroundColor: "rgba(179,181,198,0.2)",
//             pointBackgroundColor: "rgba(179,181,198,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(179,181,198,1)",
//             data: [65, 59, 90, 81, 56, 55, 40,],
//           },
//           {
//             label: "My Second dataset",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             pointBackgroundColor: "rgba(255,99,132,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(255,99,132,1)",
//             data: [28, 48, 40, 19, 96, 27, 100,],
//           },
//         ],

export default {
  name: "PolarAreaGraph",
  extends: PolarArea,
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
                  chart.data.datasets[tooltipItem.datasetIndex].backgroundColor,
              };
            },
          },
        },
      }
    );
  },
};
</script>
