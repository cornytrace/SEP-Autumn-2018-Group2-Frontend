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
    layout: {},
  },
  mounted() {
    var layout = {
      yaxis: {
        rangemode: "tozero",
        showline: true,
        zeroline: true,
      },
      margin: {
        l: 30,
        r: 30,
        b: 30,
        t: 30,
        pad: 4,
      },
      shapes: [
        {
          type: "line",
          // x-reference is assigned to the x-values
          xref: "x",
          // y-reference is assigned to the plot paper [0,1]
          yref: "paper",
          x0: "2016-12-01",
          y0: 0,
          x1: "2016-12-01",
          y1: 1,
          line: {
            color: "#e0251f",
            width: 1,
          },
        },
        {
          type: "line",
          // x-reference is assigned to the x-values
          xref: "x",
          // y-reference is assigned to the plot paper [0,1]
          yref: "paper",
          x0: "2017-03-01",
          y0: 0,
          x1: "2017-03-01",
          y1: 1,
          line: {
            color: "#00cc00",
            width: 1,
          },
        },
      ],
    };
    Plotly.newPlot("graph-area", this.data, layout, {
      displaylogo: false,
    });
  },
};
</script>
