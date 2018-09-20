<script>
import { Doughnut } from "vue-chartjs";

//[
//          {
//            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16",],
//            data: [],
//          },
//        ],

export default {
  name: "DoughnutGraph",
  extends: Doughnut,
  props: {
    data: {
      type: Array,
      default: new Array()
    },
    labels: {
      type: Array,
      default: new Array()
    },
    maintainAspectRatio: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.data
      },
      { responsive: true, maintainAspectRatio: this.maintainAspectRatio }
    );
  }
};
</script>
