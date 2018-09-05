<script>
import { Scatter, } from 'vue-chartjs'
import { CustomTooltips, } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { hexToRgba, } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  components: {
    hexToRgba,
    CustomTooltips,
  },
  extends: Scatter,
  mounted () {
    this.renderChart(
      {
        labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,],
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0,
            }, {
                x: 0,
                y: 10,
            }, {
                x: 10,
                y: 5,
            },],
        },],
      },
      {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor, }
            },
          },
        },
      }
    )
  },
}
</script>
