<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieGraph",
  extends: Pie,
  props: {
    data: {
      type: Array,
      default: new Array(),
    },
    labels: {
      type: Array,
      default: new Array(),
    },
    backgroundColors: {
      type: Array,
      default: function() {
        return ["#41B883", "#E46651", "#00D8FF", "#DD1B16",];
      },
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
        datasets: [
          {
            backgroundColor: this.backgroundColors,
            data: this.data,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: this.maintainAspectRatio, }
    );
  },
};
</script>
