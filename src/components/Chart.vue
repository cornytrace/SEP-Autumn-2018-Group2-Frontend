<!--
 This is the base class for all the graphs on the website, based on plotly,js.
 To use it, include it as a component in your components, and pass plotly.js data and layout through the props.
-->
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
      l: 50,
      r: 30,
      b: 50,
      t: 30,
      pad: 4,
    };
    layoutTemp.yaxis = {
      rangemode: "tozero",
      showline: true,
      zeroline: true,
    };
    if (this.layout) {
      Object.assign(layoutTemp, this.layout);
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
