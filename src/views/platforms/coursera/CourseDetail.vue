<template>
  <div class="animated fadeIn">
    <!--First row-->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="6">
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-users icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="enrolled-learners">920</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Enrolled learners</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="leaving-learners">107</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Leaving learners</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-check icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="finished-learners">437</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Finished learners</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-video-camera icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="no-videos">32</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Videos</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="no-quizzes">16</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Quizzes</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-pencil icon-color p-4 font-2xl mr-0 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="no-assignments">3</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Assignments</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-th-list icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="no-modules">8</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Modules</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <i class="fa fa-calendar icon-color p-4 font-2xl mr-3 float-left"></i>
                <div class="h5 text-color mb-0 pt-3" id="no-cohorts">3</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Cohorts</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col xs="12" sm="12" md="12" lg="6">
        <b-card id="dist-eval" header="Distribution of evaluation rating">
          <div class="chart-wrapper" >
            <bar-graph chartId="chart-line-02" />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--Second row-->
    <b-row>
      <b-col md="6">
        <b-card id="progr-fin" header="Progression of finished learners">
          <div class="chart-wrapper">
            <line-graph chartId="chart-bar-01"/>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card id="leav-per-mod" header="Leaving learners per module">
          <div class="chart-wrapper">
            <doughnut-graph chartId="chart-doughnut-01"/>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--Thirth row-->
    <b-row>
      <b-col md="6">
        <b-card id="avg-time-in-course" header="Average time spend in course by learners">
          <div class="chart-wrapper">
            <bar-graph chartId="chart-scatter-01"/>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card id="avg-time-in-mod" header="Average time spend per module by learners">
          <div class="chart-wrapper">
            <bar-graph chartId="chart-polar-01"/>
          </div>
        </b-card>
      </b-col> 
    </b-row>
  </div>
</template>

<script>
import LineGraph from "@/views/charts/LineGraph";
import ScatterGraph from "@/views/charts/ScatterGraph";
import BarGraph from "@/views/charts/BarGraph";
import DoughnutGraph from "@/views/charts/DoughnutGraph";
import PolarAreaGraph from "@/views/charts/PolarAreaGraph";
import RadarGraph from "@/views/charts/RadarGraph";

export default {
  name: "CourseDetail",
  data: function() {
    return {
      show: true,
      course: this.$route.params.courseid,
      lineGraphData: [0.6, 0.6, 1.55, 5.5, 0.4, 0.35, 1.0, 1.4, 1.6, 0.5],
      lineGraphLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  components: {
    LineGraph,
    ScatterGraph,
    BarGraph,
    DoughnutGraph,
    PolarAreaGraph,
    RadarGraph
  }
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.align-data {
  text-align: right;
}

.text-font-size {
  font-size: 10px;
}

.icon-color {
  color: #ffffff;
  background-color: #00a9d4;
}

.text-color {
  color: #00a9d4;
}
</style>
