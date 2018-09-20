<template>
  <div class="animated fadeIn">
    <!--First row-->
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="6">
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                  <i class="fa fa-users icon-color p-4 font-2xl mr-3"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="enrolled-learners">{{ enrolledStudents }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Enrolled learners</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-user-times icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="leaving-learners">{{ leavingLearners }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Leaving learners</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-check icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="finished-learners">{{ finishedLearners }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Finished learners</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-video-camera icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="no-videos">{{ numberOfVideos }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Videos</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-question icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="no-quizzes">{{ numberOfQuizzes }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Quizzes</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-pencil icon-color p-4 font-2xl mr-0 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="no-assignments">{{ numberOfAssignments }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Assignments</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-th-list icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="no-modules">{{ numberOfModules }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Modules</div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card :no-body="true">
              <b-card-body class="p-0 clearfix align-data mr-3">
                <span class="iconsquare">
                <i class="fa fa-calendar icon-color p-4 font-2xl mr-3 float-left"></i>
                </span>
                <div class="h5 text-color mb-0 pt-3" id="no-cohorts">{{ numberOfCohorts }}</div>
                <div class="text-muted text-uppercase font-weight-bold text-font-size">Cohorts</div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col xs="12" sm="12" md="12" lg="6">
        <b-card id="dist-eval" header="Distribution of evaluation rating">
          <div class="chart-wrapper" >
            <bar-graph chartId="chart-line-02" :data=distEvalRateData :labels=distEvalRateLabels />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--Second row-->
    <b-row>
      <b-col md="6">
        <b-card id="progr-fin" header="Progression of finished learners">
          <div class="chart-wrapper">
            <line-graph chartId="chart-bar-01" :data=progFinLearData :labels=progFinLearLabels />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card id="leav-per-mod" header="Leaving learners per module">
          <div class="chart-wrapper">
            <doughnut-graph chartId="chart-doughnut-01" :data=leavLearModData :labels=leavLearModLabels />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--Thirth row-->
    <b-row>
      <b-col md="6">
        <b-card id="avg-time-in-course" header="Average time spend in course by learners">
          <div class="chart-wrapper">
            <bar-graph chartId="chart-scatter-01" :data=avgTimeCourData :labels=avgTimeCourLabels />
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card id="avg-time-in-mod" header="Average time spend per module by learners">
          <div class="chart-wrapper">
            <bar-graph chartId="chart-polar-01" :data=avgTimeModData :labels=AvgTimeModLabels />
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
import { hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

export default {
  name: "CourseDetail",
  data: function() {
    return {
      show: true,
      course: this.$route.params.courseid,

      /*
       * Teacher analytics 
       */
      // number data
      enrolledStudents: 983,
      leavingLearners: 107,
      finishedLearners: 437,
      numberOfVideos: 32,
      numberOfQuizzes: 16,
      numberOfAssignments: 3,
      numberOfModules: 8,
      numberOfCohorts: 4,

      // data distribution of evaluation rating
      distEvalRateData: [
        {
          label: "Distribution of evaluation rating",
          backgroundColor: "#1d97d9",
          data: [18, 6, 3, 56, 4, 25, 10, 9, 33, 3,],
        },
      ],
      distEvalRateLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],

      // data progression of finished learners
      progFinLearData: [
        {
          label: "Progression of finished learners",
          backgroundColor: hexToRgba("#00D8FF", 90),
          data: [1, 6, 3, 5, 4, 5, 10, 9, 6, 3,],
        },
      ],
      progFinLearLabels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],

      // data leaving learners per module
      leavLearModData: [
        {
          label: "Leaving learners per module",
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16",],
          data: [80, 120, 30, 60,],
        },
      ],
      leavLearModLabels: ["Module A", " Module B", "Module C", "Module D",],

      // data average time spend in a course by learners
      avgTimeCourData: [
        {
          label: "Average time spend in course by learners",
          backgroundColor: "#f879d9",
          data: [38, 6, 5, 56, 44, 25,],
        },
      ],
      avgTimeCourLabels: [1, 4, 5, 7, 13, 25,],

      // data average time spend per module by learners
      avgTimeModData: [
        {
          label: "Average timr spend per module by learners",
          backgroundColor: "#f8d979",
          data: [28, 11, 30, 56,],
        },
      ],
      AvgTimeModLabels: [1, 2, 3, 4,],

      /*
       * QDT member analytics 
       * not yet implemented 
       */
    };
  },
  components: {
    LineGraph,
    ScatterGraph,
    BarGraph,
    DoughnutGraph,
    PolarAreaGraph,
    RadarGraph,
  },
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
  width: 100%;
  color: #ffffff;
}

.text-color {
  color: #00a9d4;
}

.iconsquare {
  float: left;
  background-color: #00a9d4;
  height: 100%;
  width: 75px;
  text-align: center;
}
</style>
