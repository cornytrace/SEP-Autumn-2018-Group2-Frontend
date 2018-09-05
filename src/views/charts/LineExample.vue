<script>
import { Line, } from 'vue-chartjs'
import { CustomTooltips, } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { hexToRgba, } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  components: {
    hexToRgba,
    CustomTooltips,
  },
  extends: Line,
  mounted () {
    this.renderChart(
      {
        labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,],
        datasets: [
          {
            label: 'Grade distribution',
            backgroundColor: hexToRgba('#00D8FF', 90),
            data: [0.6, 0.6, 0.55, 0.5, 0.4, 0.35, 1.0, 1.4, 1.6, 1.2,],
          },
        ],
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
