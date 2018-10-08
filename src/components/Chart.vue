<template>
  <div :id=id>
  </div>
</template>


<script>
import Plotly from "plotly.js";

export default {
  props: {
    id: {
      type: String,
      default: "graph-area",
    },
    data: {
      type: Array,
      default: new Array(),
    },
    layout: {
      type: Object,
    },
  },
  mounted() {
    let layoutTemp = new Object();
    layoutTemp.margin = {
      l: 30,
      r: 30,
      b: 30,
      t: 30,
      pad: 4,
    };
    layoutTemp.yaxis = {
      rangemode: "tozero",
      showline: true,
      zeroline: true,
    };
    if (this.layout) {
      Object.assign(this.layout, layoutTemp);
    }
    Plotly.newPlot(this.id, this.data, layoutTemp, {
      displaylogo: false,
      displayModeBar: true,
      modeBarButtonsToRemove: [
        "resetScale2d",
        "zoom2d",
        "lasso2d",
        "select2d",
        "hoverClosestCartesian",
        "hoverCompareCartesian",
        "sendDataToCloud",
      ],
      responsive: true,
    });
  },
};
</script>
