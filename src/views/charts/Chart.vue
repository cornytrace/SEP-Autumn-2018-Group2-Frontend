<template>
  <div id="graph-area">
  </div>
</template>


<script>
import Plotly from "plotly.js";

export default {
  props: {
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
    if (this.layout) {
      layoutTemp = this.layout;
    }
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
    Plotly.newPlot("graph-area", this.data, layoutTemp, {
      displaylogo: false,
    });
  },
};
</script>
