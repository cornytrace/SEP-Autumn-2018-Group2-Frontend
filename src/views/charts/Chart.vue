<template>
  <div id="graph-area">
  </div>
</template>


<script>
import Plotly from "plotly.js-dist";

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
    this.layout.margin = {
      l: 30,
      r: 30,
      b: 30,
      t: 30,
      pad: 4,
    };
    this.layout.yaxis = {
      rangemode: "tozero",
      showline: true,
      zeroline: true,
    };
    Plotly.newPlot("graph-area", this.data, this.layout, {
      displaylogo: false,
    });
  },
};
</script>
