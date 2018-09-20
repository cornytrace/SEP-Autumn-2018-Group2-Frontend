<script>
import { Scatter } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

// Example data
// [
//           {
//             label: "Scatter Dataset",
//             data: [
//               {
//                 x: -10,
//                 y: 0,
//               },
//               {
//                 x: 0,
//                 y: 10,
//               },
//               {
//                 x: 10,
//                 y: 5,
//               },
//             ],
//           },
//         ],

export default {
  name: "ScatterGraph",
  components: {
    hexToRgba,
    CustomTooltips,
  },
  extends: Scatter,
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
