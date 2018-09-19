<script>
import { Line } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

export default {
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
    maintainAspectRatio: {
      type: Boolean,
      default: true,
    },

    labels: {
      type: Array,
      default: new Array(),
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Grade distribution",
            backgroundColor: hexToRgba("#00D8FF", 90),
            data: this.data,
          },
        ],
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
