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
  },
  mounted() {
    // Overwriting base render method with actual data.
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
